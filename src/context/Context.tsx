import { createContext, useContext, useEffect, useState } from 'react'
import ContextProps from 'types/ContextPropsType'

import Movie from 'types/MovieType'
import { getCachedMovie, setCachedMovie } from '../utils/LocalStorage'

/// [Context] - Context for the app
export const Context = createContext<ContextProps>({
  movieList: [],
  movieExists: () => false,
  getMovieById: () => undefined,
  addToList: () => {},
  removeFromList: () => {},
})

/// [ContextProvider] - ContextProvider for the app
export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  /// cache movie list on first load
  useEffect(() => {
    if (!getCachedMovie()) {
      setCachedMovie([])
    }
  }, [])

  /// state for movie list and set movie list to cached movie list
  const [movieList, setMovieList] = useState(getCachedMovie())

  /// check if movie exists in movie list
  const movieExists = (id: string) => {
    if (!movieList) return false
    return movieList.some((item: Movie) => item.imdbID === id)
  }

  /// get movie by id from movie list
  const getMovieById = (id: string) => {
    return movieList.find((item: Movie) => item.imdbID === id)
  }

  /// add to list and update cached movie list
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

  /// remove from list and update cached movie list
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
