import React from 'react'
import CategoriesLoading from '@/components/home/categories/loading'
import FeaturedMovieLoading from '@/components/home/featured-movie/loading'
import MoviesListLoading from '@/components/home/movies-list/loading'

type Props = {}

const Loading = (props: Props) => {
  return (
    <div className="Home-Component container flex flex-col gap-y-8 sm:gap-y-10 md:gap-y-12 lg:gap-y-14">
      <FeaturedMovieLoading />
      <CategoriesLoading />
      <MoviesListLoading />
      <MoviesListLoading />
    </div>
  )
}

export default Loading
