import Image from "next/image"
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from '@heroicons/react/solid'
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon
} from '@heroicons/react/outline'
import { HeaderIcon } from "./HeaderIcon"
import { signOut, useSession } from "next-auth/react"

export const Header = () => {
  const { data: session } = useSession()

  return (
    <header className="flex items-center justify-between w-full fixed z-50 bg-white px-2 py-1 lg:px-5 shadow-md">
      <div className="flex items-center gap-2 lg:grow-0 lg:shrink-0 lg:basis-72">
        <Image
          src="/images/facebook-logo.webp"
          width={40}
          height={40}
          layout="fixed"
          alt=""
        />

        <div className="flex items-center gap-2 rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input 
            type="text" 
            placeholder="Search Fakebook" 
            className="hidden lg:inline-flex bg-transparent outline-none placeholder-gray-500"
          />
        </div>
      </div>
      
      <div className="flex justify-center gap-2 lg:gap-6 grow shrink basis-auto ">
        <HeaderIcon styling="squared" active href="/" Icon={HomeIcon} />
        <HeaderIcon styling="squared" href="/report" Icon={FlagIcon} />
        <HeaderIcon styling="squared" href="/watch" Icon={PlayIcon} />
        <HeaderIcon styling="squared" href="/marketplace" Icon={ShoppingCartIcon} />
        <HeaderIcon styling="squared" href="/community" Icon={UserGroupIcon} />
      </div>
      
      <div className="flex items-center sm:gap-2 justify-end lg:grow-0 lg:shrink-0 lg:basis-72">
        <HeaderIcon styling="rounded" href="/view" Icon={ViewGridIcon} />
        <HeaderIcon styling="rounded" href="/chat" Icon={ChatIcon} />
        <HeaderIcon styling="rounded" href="/notifications" Icon={BellIcon} />
        <HeaderIcon styling="rounded" href="/see-more" Icon={ChevronDownIcon} />
        <button
          onClick={() => signOut()}
          className="group rounded-full cursor-pointer overflow-hidden h-[40px] w-[40px]"
        >
          <Image 
            className="group-hover:brightness-75 transition-all"
            src={session?.user?.image || '/images/default-user-icon.jpg'}
            width={40}
            height={40}
            layout="fixed"
            alt=""
          />
        </button>
      </div>
    </header>
  )
}