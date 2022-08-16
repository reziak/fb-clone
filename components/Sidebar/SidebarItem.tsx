import Image from "next/image"
import Link from "next/link"
import { ComponentProps } from "react"

type HeroIcon = (props: ComponentProps<'svg'>) => JSX.Element

interface SidebarItemProps {
  src?: string
  Icon?: HeroIcon
  href: string
  title: string
}

export const SidebarItem = ({ src, Icon, href, title }: SidebarItemProps) => {
  return (
    <Link href={href}>
      <a className="flex items-center gap-2 p-2 rounded-xl cursor-pointer hover:bg-gray-200 transition-colors duration-300">
        {src ? (
          <Image 
            className="rounded-full"
            src={src}
            width={32}
            height={32}
            alt=""
          />
        ) : (
          Icon && (
            <Icon className="h-8 w-8 text-blue-500" />
          )
        )}
        <p className="hidden sm:block font-medium">{title}</p>
      </a>
    </Link>
  )
}