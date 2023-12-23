import React from 'react'
import FeaturedMovie from '@/components/home/featured-movie'
import Categories from '@/components/home/categories'
import Movies from '@/mocks/movies.json'
import Genres from '@/mocks/genres.json'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className="Home container mx-auto">
      <FeaturedMovie movie={Movies.results[0]} isCompact={true} />
      <Categories categories={Genres.genres.slice(0, 5)} />
    </div>
  )
}

export default Home
