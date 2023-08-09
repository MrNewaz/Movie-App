import Movie from './MovieType'

type ContextProps = {
  movieList: Movie[]
  movieExists: (id: string) => boolean
  getMovieById: (id: string) => Movie | undefined
  addToList: (movie: Movie) => void
  removeFromList: (id: string) => void
}

export default ContextProps
