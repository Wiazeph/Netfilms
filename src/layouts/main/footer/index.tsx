import Link from 'next/link'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="Footer mt-auto pb-4">
      <div className="container mx-auto flex items-center justify-center gap-1.5">
        <span>Made with by</span>

        <Link
          href="https://emreerden.dev/"
          target="_blank"
          className="underline"
        >
          Emre Erden
        </Link>
      </div>
    </footer>
  )
}

export default Footer
