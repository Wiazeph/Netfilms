import React from 'react'
import HomeComponent from '@/components/home'

type Props = {
  params: {
    category: string[]
  }
}

const getCategory = async (genreID: String) => {
  const res = await fetch(
    `${process.env.BASE_URL}/discover/movie?api_key=${process.env.API_KEY}&page=1&with_genres=${genreID}`
  )
  return res.json()
}

const getGenres = async () => {
  const res = await fetch(
    `${process.env.BASE_URL}/genre/movie/list?api_key=${process.env.API_KEY}&page=1`
  )
  return res.json()
}

const getTopRated = async () => {
  const res = await fetch(
    `${process.env.BASE_URL}/movie/top_rated?api_key=${process.env.API_KEY}&page=1`
  )
  return res.json()
}

const getPopular = async () => {
  const res = await fetch(
    `${process.env.BASE_URL}/movie/popular?api_key=${process.env.API_KEY}&page=1`
  )
  return res.json()
}

const Home = async (props: Props) => {
  let selectedCategory

  if (props.params.category?.length > 0) {
    const { results } = await getCategory(props.params.category[0])
    selectedCategory = results
  }

  // const { results: categories } = await getGenres()
  // const { results: topMovies } = await getTopRated()
  // const { results: popularMovies } = await getPopular()

  // note: more performance than above
  const genresPromise = getGenres()
  const topRatedPromise = getTopRated()
  const popularPromise = getPopular()
  const [
    { genres: categories },
    { results: topMovies },
    { results: popularMovies },
  ] = await Promise.all([genresPromise, topRatedPromise, popularPromise])
  // note: more performance than above

  return (
    <HomeComponent
      categories={categories}
      topMovies={topMovies}
      popularMovies={popularMovies}
      selectedCategory={{
        id: props.params.category?.[0] ?? '',
        movies: selectedCategory ? selectedCategory?.slice(0, 7) : [],
      }}
    />
  )
}

export default Home
