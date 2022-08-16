import { ComponentProps } from "react";
import Link from "next/link"

type HeroIcon = (props: ComponentProps<'svg'>) => JSX.Element

interface HeaderIconProps {
  href: string
  active?: boolean
  Icon: HeroIcon
  styling: 'rounded' | 'squared'
}

export const HeaderIcon = ({ href, active, Icon, styling }: HeaderIconProps) => {
  const linkStyle = styling === 'squared' 
    ? `icon-squared ${active && "text-blue-500"}`
    : 'icon-rounded'

  const iconStyle = styling === 'squared'
    ? 'h-5 text-center sm:h-7 mx-auto'
    : ''

  return (
    <Link href={href}>
      <a className={linkStyle}>
        <Icon className={iconStyle} />
      </a>
    </Link>
  )
}