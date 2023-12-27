import React from 'react'
import { notFound } from 'next/navigation'
import Movies from '@/mocks/movies.json'
import MovieComponent from '@/components/movie'

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
    (movie) => movie.id == props.params.id
  )

  if (!movieDetail) {
    notFound()
  }

  if (props.searchParams.error === 'true') {
    throw new Error('An error has occurred. Sorry for that!')
  }

  return <MovieComponent movieDetail={movieDetail} />
}

export default Movie
