import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaPlus } from 'react-icons/fa'
import { IMovie } from '@/types'
import Button from '@/components/ui/button'

type Props = {
  movie: IMovie
  isCompact: boolean
}

const FeaturedMovie = (props: Props) => {
  return (
    <section className="Featured-Movie">
      <div className="Movie-Wrapper flex flex-col gap-6 sm:gap-7 md:gap-8">
        <h1 className="Movie-Title text-4xl md:text-5xl xl:text-6xl uppercase tracking-tighter font-black max-w-[25ch]">
          {props.movie.title}
        </h1>

        <p
          className={`text-lg md:text-xl xl:text-2xl max-w-[50ch] ${
            props.isCompact ? 'line-clamp-2' : ''
          }`}
        >
          {props.movie.overview}
        </p>

        <div className="Action-Buttons flex gap-3">
          <Button
            classes={
              'Play-Button w-76 text-xl font-bold bg-zinc-100 text-zinc-800'
            }
          >
            <Link href={`/movie/${props.movie.id}`}>Play</Link>
          </Button>

          <Button
            classes={
              'Add-Button w-16 border-2 border-zinc-100 text-zinc-100 hover:border-zinc-800'
            }
          >
            <FaPlus />
          </Button>
        </div>

        <div className="Movie-Poster select-none">
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
