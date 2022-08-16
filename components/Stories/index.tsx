import { useSession } from "next-auth/react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { PlusIcon, ArrowRightIcon } from '@heroicons/react/solid'
import { StoryItem } from "./StoryItem"
import Link from "next/link"

export type Story = {
  storyImage: string
  storyUrl: string
  author: {
    name: string
    imageUrl: string
  }
}

export const Stories = () => {
  const [stories, setStories] = useState<Story[]>([])
  const { data: session } = useSession()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/stories')
        
        if (response.status !== 200) return []
        
        const result = await response.json()

        setStories(result.stories)
      } catch (err) {
        console.error(`Something wrong with your request: ${err}`)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="flex items-center relative mx-auto max-w-[403px] md:max-w-[540px] lg:max-w-[677px] gap-2">
      <Link href="/stories">
        <a className="absolute rounded-full bg-white drop-shadow h-10 w-10 -right-5 p-2.5 hover:bg-gray-200 text-gray-600 z-10">
          <ArrowRightIcon />
        </a>
      </Link>
      <Link href="/stories/create">
        <a className="group rounded-xl overflow-hidden w-[129px] h-[230px] bg-white cursor-pointer flex flex-col hover:bg-gray-300 transition-colors drop-shadow">
          <Image
            src={session?.user?.image || ''}
            width={129}
            height={180}
            alt=""
            objectFit="cover"
            className="group-hover:brightness-75 group-hover:scale-110 transition-all duration-500"
          />
          <div className="relative flex flex-1 items-center justify-center">
            <div className="flex items-center justify-center absolute -top-5 left-0 right-0">
              <PlusIcon className="w-10 h-10 bg-blue-500 text-white rounded-full border border-4 border-white p-1 group-hover:border-gray-300 transition-colors box-border" />
            </div>
            <p className="flex justify-center items-center font-medium text-sm">Create Story</p>
          </div>
        </a>
      </Link>
      {stories && stories.map(s => (
        <StoryItem key={s.storyUrl} story={s} />
      ))}  
    </div>
  )
}