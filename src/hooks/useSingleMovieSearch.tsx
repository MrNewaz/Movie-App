import axios from 'axios'
import { useEffect, useState } from 'react'
import { Movie } from 'types/MovieType'

export default function useSingleMovieSearch(id: string) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [movie, setMovie] = useState<Movie>({} as Movie)

  useEffect(() => {
    setLoading(true)
    let cancel = () => {}

    axios({
      method: 'GET',
      url: 'https://www.omdbapi.com/',

      params: { apikey: 'fed58199', i: id },

      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setMovie(res.data)
        setLoading(false)
      })
      .catch((e) => {
        if (axios.isCancel(e)) return
        setError(true)
      })
    return () => cancel()
  }, [id])

  return { loading, error, movie }
}
