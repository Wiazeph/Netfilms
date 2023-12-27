import Link from 'next/link'
import React from 'react'
import { NavLinks } from '@/utils/consts/nav-links'

type Props = {}

const NavBarComponent = (props: Props) => {
  return (
    <nav className="Nav-Bar flex gap-x-6 sm:gap-x-8 md:gap-x-10 lg:gap-x-12 xl:gap-x-14">
      {NavLinks.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className="hover:text-zinc-400 transition-colors"
        >
          {link.title}
        </Link>
      ))}
    </nav>
  )
}

export default NavBarComponent
