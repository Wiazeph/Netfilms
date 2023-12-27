import React from 'react'
import Link from 'next/link'
import { ICategory } from '@/types'

type Props = {
  categories: ICategory[]
}

const Categories = (props: Props) => {
  return (
    <section className="Categories">
      <div className="h-18 flex gap-6">
        {props.categories.map((category) => (
          <Link
            key={category.id}
            href={`/${category.id}`}
            className="Category w-full h-full flex items-center justify-center bg-black/75 font-bold border border-[#333] rounded-md"
          >
            <div className="name">{category.name}</div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Categories
