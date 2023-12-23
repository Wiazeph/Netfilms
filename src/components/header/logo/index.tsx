import React from 'react'
import Link from 'next/link'
import { FaPlayCircle } from 'react-icons/fa'

type Props = {}

const Logo = (props: Props) => {
  return (
    <div className="Logo">
      <Link
        href="/"
        className="flex items-center gap-2 text-2xl font-bold tracking-tighter"
      >
        <FaPlayCircle /> NETFILMS
      </Link>
    </div>
  )
}

export default Logo
