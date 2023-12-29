import React from 'react'
import HomeComponent from '@/components/home'
import { getCategory, getGenres, getTopRated, getPopular } from '@/services'

type Props = {
  params: {
    category: string[]
  }
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
  const [
    { genres: categories },
    { results: topMovies },
    { results: popularMovies },
  ] = await Promise.all([getGenres(), getTopRated(), getPopular()])
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
