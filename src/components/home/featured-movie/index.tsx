import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaPlus } from 'react-icons/fa'

type Props = {
  movie: {
    id: number
    poster_path: string
    title: string
    overview: string
  }
  isCompact: true
}

const FeaturedMovie = (props: Props) => {
  return (
    <div className="movieWrapper">
      <h1 className="movieTitle">{props.movie.title}</h1>

      <p className={`overview ${props.isCompact ? 'shortOverview' : ''}`}>
        {props.movie.overview}
      </p>

      <div className="actionButtons">
        <Link href={`/movie/${props.movie.id}`} className="playButton"></Link>

        <button className="addButton">
          <FaPlus />
        </button>
      </div>

      <div className="moviePoster">
        <div className="moviePosterOverlay"></div>

        <Image
          unoptimized
          src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`}
          alt={props.movie.title}
          fill
        />
      </div>
    </div>
  )
}

export default FeaturedMovie
