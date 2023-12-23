import React from 'react'
import FeaturedMovie from '@/components/home/featured-movie'
import Categories from '@/components/home/categories'
import MoviesSection from '@/components/home/movies'
import Movies from '@/mocks/movies.json'
import Genres from '@/mocks/genres.json'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className="Home container mx-auto">
      <FeaturedMovie movie={Movies.results[0]} isCompact={true} />
      <Categories categories={Genres.genres.slice(0, 5)} />
      <MoviesSection
        title="Popular Films"
        movies={Movies.results.slice(0, 10)}
      />
      <MoviesSection
        title="Your Favorites"
        movies={Movies.results.slice(10, 18)}
      />
    </div>
  )
}

export default Home
