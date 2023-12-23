import React from 'react'
import Movies from '@/mocks/movies.json'
import FeaturedMovie from '@/components/home/featured-movie'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className="Home container mx-auto">
      <FeaturedMovie movie={Movies.results[0]} isCompact={true} />
    </div>
  )
}

export default Home
