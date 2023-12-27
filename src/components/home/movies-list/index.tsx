import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IMovie } from '@/types'

type Props = {
  movies: IMovie[]
  title: string
}

const Movies = (props: Props) => {
  return (
    <section className="Movies-List">
      <h3 className="mb-3 uppercase text-2xl tracking-tighter">
        {props.title}
      </h3>

      <div className="Movies">
        {props.movies.map((movie) => (
          <div
            className="Movie relative transition-transform duration-300 ease-in-out overflow-hidden rounded-lg hover:scale-110"
            key={movie.id}
          >
            <Link href={`/movie/${movie.id}`}>
              <Image
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
                unoptimized
                fill
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Movies
