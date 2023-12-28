import React from 'react'
import Skeleton from '@/components/ui/skeleton'

type Props = {}

const CategoriesLoading = (props: Props) => {
  return (
    <div className="Category flex gap-x-4">
      {Array(10)
        .fill(null)
        .map((_, index) => (
          <Skeleton key={index} width={200} height={56} />
        ))}
    </div>
  )
}

export default CategoriesLoading
