import React from 'react'
import { notFound } from 'next/navigation'
import MovieComponent from '@/components/movie'
import { getMovie } from '@/services'

type Props = {
  params: {
    id: number
  }
  searchParams: {
    error: string
  }
}

const Movie = async (props: Props) => {
  const movieDetail = await getMovie(props.params.id)

  if (!movieDetail) {
    notFound()
  }

  return <MovieComponent movieDetail={movieDetail} />
}

export default Movie
