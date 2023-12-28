import React from 'react'

type Props = {}

const FeaturedMovieLoading = (props: Props) => {
  return (
    <div className="Featured-Movie h-full">
      <div className="min-h-full min-w-full flex items-center justify-center">
        <div className="inline-block w-14 h-14 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
      </div>
    </div>
  )
}

export default FeaturedMovieLoading
