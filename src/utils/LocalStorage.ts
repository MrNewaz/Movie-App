import Movie from 'types/MovieType'

/// setting cached movie list from local storage
const setCachedMovie = (movieList: Movie[]) => {
  localStorage.setItem('movies', JSON.stringify(movieList))
}

/// getting cached movie list from local storage
const getCachedMovie = () => {
  return JSON.parse(localStorage.getItem('movies') || '[]')
}

export { getCachedMovie, setCachedMovie }
