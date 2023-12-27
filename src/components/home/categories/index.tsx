import React from 'react'
import Link from 'next/link'
import { ICategory } from '@/types'

type Props = {
  categories: ICategory[]
}

const Categories = (props: Props) => {
  return (
    <section className="Categories -mt-6 sm:-mt-7 md:-mt-8">
      <div className="flex flex-wrap gap-2 sm:gap-4 md:gap-6">
        {props.categories.map((category) => (
          <Link
            key={category.id}
            href={`/${category.id}`}
            className="Category px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 h-10 sm:h-12 md:h-14 lg:h-16 xl:h-18 flex items-center justify-center bg-black/70 font-bold border border-[#333] rounded-md shadow-xl hover:bg-black hover:scale-105 transition-all"
          >
            <div className="name">{category.name}</div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Categories
