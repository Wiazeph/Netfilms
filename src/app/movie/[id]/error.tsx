'use client'
import React from 'react'
import Link from 'next/link'

type Props = {}

const Error = (props: Props) => {
  return (
    <div className="Error flex flex-col items-center">
      <div className="text-2xl">An error has occurred. Sorry for that!</div>

      <Link href="/" className="underline text-lg mt-2">
        Go back home
      </Link>
    </div>
  )
}

export default Error
