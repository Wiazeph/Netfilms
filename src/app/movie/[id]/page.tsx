import React from 'react'
import { notFound } from 'next/navigation'
import MovieComponent from '@/components/movie'

type Props = {
  params: {
    id: number
  }
  searchParams: {
    error: string
  }
}

const getMovie = async (movieID: number) => {
  const res = await fetch(
    `${process.env.BASE_URL}/movie/${movieID}?api_key=${process.env.API_KEY}`
  )
  return res.json()
}

const Movie = async (props: Props) => {
  const movieDetail = await getMovie(props.params.id)

  if (!movieDetail) {
    notFound()
  }

  if (props.searchParams.error === 'true') {
    throw new Error('An error has occurred. Sorry for that!')
  }

  return <MovieComponent movieDetail={movieDetail} />
}

export default Movie
