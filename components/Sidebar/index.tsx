import { 
  ChevronDownIcon, 
  ShoppingBagIcon,
  UserGroupIcon,
} from '@heroicons/react/outline'
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon
} from '@heroicons/react/solid'
import { useSession } from 'next-auth/react'
import { SidebarItem } from "./SidebarItem"

export const Sidebar = () => {
  const { data: session } = useSession()

  return (
    <aside className="p-2 max-w-[400px] xl:min-w-[300px] flex flex-col">
      <SidebarItem 
        src={session?.user?.image ||'/images/default-user-icon.jpg' } 
        href="/users"
        title={session?.user?.name || 'Uknown user'} 
      />
      <SidebarItem Icon={UsersIcon} href="/friends" title="Friends" />
      <SidebarItem Icon={UserGroupIcon} href="/groups" title="Groups" />
      <SidebarItem Icon={ShoppingBagIcon} href="/marketplace" title="Marketplace" />
      <SidebarItem Icon={DesktopComputerIcon} href="/watch" title="Watch" />
      <SidebarItem Icon={CalendarIcon} href="/events" title="Events" />
      <SidebarItem Icon={ClockIcon} href="/memories" title="Memories" />
      <SidebarItem Icon={ChevronDownIcon} href="/see-more" title="See more" />
    </aside>
  )
}