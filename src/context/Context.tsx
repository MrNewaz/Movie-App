import { createContext, useContext, useEffect, useState } from 'react'
import ContextProps from 'types/ContextPropsType'

import Movie from 'types/MovieType'
import { getCachedMovie, setCachedMovie } from '../utils/LocalStorage'

export const Context = createContext<ContextProps>({
  movieList: [],
  movieExists: () => false,
  getMovieById: () => undefined,
  addToList: () => {},
  removeFromList: () => {},
})

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  useEffect(() => {
    if (!getCachedMovie()) {
      setCachedMovie([])
    }
  }, [])

  const [movieList, setMovieList] = useState(getCachedMovie())

  const movieExists = (id: string) => {
    if (!movieList) return false
    return movieList.some((item: Movie) => item.imdbID === id)
  }
  const getMovieById = (id: string) => {
    return movieList.find((item: Movie) => item.imdbID === id)
  }

  const addToList = (movie: Movie) => {
    if (movieExists(movie.imdbID)) return

    if (!movieList) {
      setMovieList([movie])
      return setCachedMovie([movie])
    }
    let updatedMovieList = [...movieList, movie]
    setMovieList(updatedMovieList)
    setCachedMovie(updatedMovieList)
  }

  const removeFromList = (id: string) => {
    let updatedMovieList = movieList.filter((item: Movie) => item.imdbID !== id)
    setMovieList(updatedMovieList)
    setCachedMovie(updatedMovieList)
  }
  return (
    <Context.Provider
      value={{
        movieList,
        movieExists,
        getMovieById,
        addToList,
        removeFromList,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)
