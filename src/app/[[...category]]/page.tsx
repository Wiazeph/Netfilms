import React from 'react'
import HomeComponent from '@/components/home'
import { ICategory } from '@/types'
import Movies from '@/mocks/movies.json'

type Props = {
  params: {
    category: ICategory[]
  }
}

const Home = (props: Props) => {
  let selectedCategory

  if (props.params.category?.length > 0) {
    selectedCategory = true
  }

  return (
    <HomeComponent
      selectedCategory={{
        id: props.params.category?.[0] ?? '',
        movies: selectedCategory ? Movies.results.slice(0, 7) : [],
      }}
    />
  )
}

export default Home
