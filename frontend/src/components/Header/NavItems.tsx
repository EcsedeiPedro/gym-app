import Link from "next/link"

export type MenuNavProps<T = unknown> = {
  children: React.ReactNode
  className?: string
  href?: string
} & T

export function Nav({ children, className }: MenuNavProps) {
  return (
    <nav className={className}>
      {children}
    </nav>
  )
}

export function NavMenu({ children, className }: MenuNavProps) {
  return (
    <ul className={className}>
      {children}
    </ul>
  )
}

export function NavMenuItem({ children, className }: MenuNavProps) {
  return (
    <li className={className}>
      {children}
    </li>
  )
}

type NavMenuItemLinkProps = {
  href: string
}

export function NavMenuItemLink({ children, className, href }: MenuNavProps<NavMenuItemLinkProps>) {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}