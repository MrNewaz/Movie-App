import { Movie } from '../context/Context'

const setCachedMovie = (movieList: Movie[]) => {
  localStorage.setItem('movies', JSON.stringify(movieList))
}

const getCachedMovie = () => {
  return JSON.parse(localStorage.getItem('movies') || '[]')
}

export { getCachedMovie, setCachedMovie }
