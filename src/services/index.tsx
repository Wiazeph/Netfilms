type Props = {
  path: string
  query?: string
}

const fetchService = async (props: Props) => {
  try {
    const res = await fetch(
      `${process.env.BASE_URL}${props.path}?api_key=${process.env.API_KEY}${props.query}`
    )
    return res.json()
  } catch (error) {
    throw new Error('An error has occurred. Sorry for that!')
  }
}

const getCategory = async (genreID: String) => {
  return fetchService({
    path: `/discover/movie`,
    query: `&with_genres=${genreID}`,
  })
}

const getGenres = async () => {
  return fetchService({
    path: `/genre/movie/list`,
    query: `&page=1`,
  })
}

const getTopRated = async () => {
  return fetchService({
    path: `/movie/top_rated`,
    query: `&page=1`,
  })
}

const getPopular = async () => {
  return fetchService({
    path: `/movie/popular`,
    query: `&page=1`,
  })
}

const getMovie = async (movieID: number) => {
  return fetchService({
    path: `/movie/${movieID}`,
    query: `&page=1`,
  })
}

export default fetchService
export { getCategory, getGenres, getTopRated, getPopular, getMovie }
