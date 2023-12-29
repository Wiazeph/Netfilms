import React from 'react'
import FeaturedMovie from '@/components/home/featured-movie'
import Categories from '@/components/home/categories'
import MoviesList from '@/components/home/movies-list'

type Props = {
  selectedCategory: {
    id: any
    movies: any[]
  }
  topMovies: any[]
  popularMovies: any[]
  categories: any[]
}

const HomeComponent = (props: Props) => {
  return (
    <div className="Home-Component container flex flex-col gap-y-8 sm:gap-y-10 md:gap-y-12 lg:gap-y-14">
      <FeaturedMovie movie={props.topMovies?.[0]} isCompact={true} />

      <Categories categories={props.categories} />

      {props.selectedCategory.movies.length > 0 && (
        <MoviesList
          title={
            props.categories.find(
              (genre) => `${genre.id}` === props.selectedCategory.id
            )?.name ?? ''
          }
          movies={props.selectedCategory.movies}
        />
      )}

      <MoviesList
        title="Top Rated Films"
        movies={props.topMovies.slice(0, 12)}
      />

      <MoviesList
        title="Popular Films"
        movies={props.popularMovies.slice(12, 20)}
      />
    </div>
  )
}

export default HomeComponent
