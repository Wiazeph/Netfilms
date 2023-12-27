import React from 'react'
import Link from 'next/link'

type Props = {}

const FooterLayout = (props: Props) => {
  return (
    <div className="container pb-4 flex items-center justify-center gap-1.5">
      <span>Made with by</span>

      <Link href="https://emreerden.dev/" target="_blank" className="underline">
        Emre Erden
      </Link>
    </div>
  )
}

export default FooterLayout
