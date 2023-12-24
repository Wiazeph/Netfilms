import Link from 'next/link'
import React from 'react'

type Props = {}

const NavBar = (props: Props) => {
  return (
    <nav className="Nav-Bar flex gap-x-6 sm:gap-x-8 md:gap-x-10 lg:gap-x-12 xl:gap-x-14">
      <Link href="/">Movies</Link>
      <Link href="/">Series</Link>
      <Link href="/">Kids</Link>
    </nav>
  )
}

export default NavBar
