import axios from 'axios'
import { useEffect, useState } from 'react'
import Movie from 'types/MovieType'

export default function useMovieSearch(query: string, pageNumber: number) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [movies, setMovies] = useState<Movie[]>([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setMovies([])
  }, [query])

  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel = () => {}

    if (query === '') {
      setLoading(false)
      return setMovies([])
    }

    axios({
      method: 'GET',
      url: 'https://www.omdbapi.com/',

      params: { apikey: 'fed58199', s: query.trim(), page: pageNumber },

      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        if (res.data.Response === 'False') {
          setLoading(false)
          return setError(true)
        }
        setMovies((prevMovies: Movie[]) => {
          return [...prevMovies, ...res.data.Search] as Movie[]
        })
        setHasMore(res.data.Search.length > 9 && res.data.totalResults > 10)
        setLoading(false)
      })
      .catch((e) => {
        if (axios.isCancel(e)) return
        setError(true)
      })
    return () => cancel()
  }, [query, pageNumber])

  return { loading, error, movies, hasMore }
}
