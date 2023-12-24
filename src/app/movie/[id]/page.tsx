import React from 'react'
import { notFound } from 'next/navigation'
import FeaturedMovie from '@/components/home/featured-movie'
import Movies from '@/mocks/movies.json'

type Props = {
  params: {
    id: number
  }
  searchParams: {
    error: string
  }
}

const Movie = (props: Props) => {
  const movieDetail = Movies.results.find(
    (movie) => movie.id === props.params.id
  )

  if (!movieDetail) {
    notFound()
  }

  if (props.searchParams.error === 'true') {
    throw new Error('An error has occurred. Sorry for that!')
  }

  return (
    <section className="Movie container mx-auto">
      <FeaturedMovie movie={movieDetail} isCompact={false} />
    </section>
  )
}

export default Movie
