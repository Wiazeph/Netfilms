import React from 'react'
import Skeleton from '@/components/ui/skeleton'

type Props = {}

const MoviesListLoading = (props: Props) => {
  return (
    <div className="Movies-List flex flex-col gap-y-3">
      <Skeleton width={128} height={36} />

      <div className="Movies">
        {Array(10)
          .fill(null)
          .map((_, index) => (
            <Skeleton key={index} />
          ))}
      </div>
    </div>
  )
}

export default MoviesListLoading
