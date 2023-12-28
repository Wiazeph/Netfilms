import React from 'react'
import FeaturedMovie from '@/components/home/featured-movie'
import Categories from '@/components/home/categories'
import MoviesList from '@/components/home/movies-list'
import Movies from '@/mocks/movies.json'
import Genres from '@/mocks/genres.json'

type Props = {}

const HomeComponent = (props: Props) => {
  return (
    <div className="Home-Component container flex flex-col gap-y-8 sm:gap-y-10 md:gap-y-12 lg:gap-y-14">
      <FeaturedMovie movie={Movies.results[0]} isCompact={true} />
      <Categories categories={Genres.genres} />

      <MoviesList title="Popular Films" movies={Movies.results.slice(0, 12)} />

      <MoviesList
        title="Your Favorites"
        movies={Movies.results.slice(12, 20)}
      />
    </div>
  )
}

export default HomeComponent
