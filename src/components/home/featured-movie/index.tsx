import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaPlus } from 'react-icons/fa'
import { IMovie } from '@/types'

type Props = {
  movie: IMovie
  isCompact: boolean
}

const FeaturedMovie = (props: Props) => {
  return (
    <section className="Featured-Movie">
      <div className="Movie-Wrapper flex flex-col gap-6">
        <h1 className="Movie-Title text-7xl uppercase tracking-tighter font-black max-w-[25ch]">
          {props.movie.title}
        </h1>

        <p
          className={`text-2xl max-w-[50ch] ${
            props.isCompact ? 'line-clamp-2' : ''
          }`}
        >
          {props.movie.overview}
        </p>

        <div className="Action-Buttons flex gap-3">
          <Link
            href={`/movie/${props.movie.id}`}
            className="Play-Button flex items-center justify-center bg-[#eee] text-[#222] w-76 rounded-full text-xl font-bold"
          >
            Play
          </Link>

          <button className="Add-Button flex items-center justify-center border-2 border-[#eee] rounded-full w-16 h-16 text-[#eee]">
            <FaPlus />
          </button>
        </div>

        <div className="Movie-Poster">
          <div className="Movie-Poster-Overlay absolute top-0 left-0 right-0 bottom-0 -z-10"></div>

          <Image
            src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`}
            alt={props.movie.title}
            unoptimized
            fill
            className="h-auto! max-h-screen -z-20 object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default FeaturedMovie
