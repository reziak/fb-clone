import { useEffect, useState } from 'react'
import { VideoCameraIcon, DotsHorizontalIcon } from '@heroicons/react/solid'
import { SearchIcon } from '@heroicons/react/outline'
import { Contact } from './Contact'

type ContactType = {
  id: string
  src: string
  name: string
}

export const Widgets = () => {
  const [contacts, setContacts] = useState<ContactType[]>([])

  useEffect(() => {
    const getContacts = async () => {
      try {
        const response = await fetch('/api/users/contacts')
        
        if (response.status !== 200) return []
        
        const result = await response.json()

        setContacts(result.contacts)
      } catch (err) {
        console.error(err)
      }
    }

    getContacts()
  }, [])

  return (
    <aside className="p-2 max-w-[400px] xl:min-w-[300px] hidden lg:flex flex-col">
      <div className='flex items-center justify-between'>
        <strong className='font-medium text-gray-600 pl-2'>
          Contacts
        </strong>
        <div className='items-center gap-2 flex'>
          <div role="button" className='rounded-full p-2 hover:bg-gray-200 transition-colors duration-300'>
            <VideoCameraIcon className='w-4 text-gray-600' />
          </div>
          <div role="button" className='rounded-full p-2 hover:bg-gray-200 transition-colors duration-300'>
            <SearchIcon className='w-4 text-gray-600' />
          </div>
          <div role="button" className='rounded-full p-2 hover:bg-gray-200 transition-colors duration-300'>
            <DotsHorizontalIcon className='w-4 text-gray-600' />
          </div>
        </div>
      </div>
      <div>
        {contacts && contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    </aside>
  )
}
