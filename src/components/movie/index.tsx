import React from 'react'
import FeaturedMovie from '@/components/home/featured-movie'

type Props = {
  movieDetail: any
}

const MovieComponent = (props: Props) => {
  return (
    <div className="Movie-Component container">
      <FeaturedMovie movie={props.movieDetail} isCompact={false} />
    </div>
  )
}

export default MovieComponent
