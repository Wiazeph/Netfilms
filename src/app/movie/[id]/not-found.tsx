import React from 'react'
import Link from 'next/link'

type Props = {}

const Movie404 = (props: Props) => {
  return (
    <div className="Movie404 flex flex-col items-center">
      <div className="text-2xl">
        We couldn&apos;t find the movie you looking for!
      </div>

      <Link href="/" className="underline text-lg mt-2">
        Go back home
      </Link>
    </div>
  )
}

export default Movie404
