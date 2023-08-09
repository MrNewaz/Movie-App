import { Alert, Box, Grid } from '@mui/material'
import Container from '@mui/material/Container'
import MovieCard from 'components/Home/MovieCard'
import SearchBar from 'components/Home/SearchBar'
import Loading from 'components/Loading/Loading'
import useMovieSearch from 'hooks/useMovieSearch'
import { useCallback, useRef, useState } from 'react'
import IntersectionObserverType from 'types/IntersectionObserverType'
import Movie from 'types/MovieType'

const Home = () => {
  const [query, setQuery] = useState('Justice League')
  const [pageNumber, setPageNumber] = useState(1)

  const { movies, hasMore, loading, error } = useMovieSearch(query, pageNumber)

  const observer = useRef<IntersectionObserverType | null>(null)
  const lastMovieElementRef = useCallback(
    (node: any) => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1)
        }
      })
      if (node) observer.current.observe(node)
    },
    [loading, hasMore]
  )

  const handleSearch = (e: any) => {
    setQuery(e.target.value)
    setPageNumber(1)
  }
  return (
    <Container>
      <SearchBar handleSearch={handleSearch} />
      <Grid container spacing={3} alignItems="stretch">
        {movies.map((movie: Movie, index) => {
          if (movies.length === index + 1) {
            return (
              <Grid
                ref={lastMovieElementRef}
                item
                xs={12}
                sm={6}
                key={movie.imdbID}
              >
                <MovieCard movie={movie} />
              </Grid>
            )
          } else {
            return (
              <Grid item xs={12} sm={6} key={movie.imdbID}>
                <MovieCard movie={movie} />
              </Grid>
            )
          }
        })}
      </Grid>
      <Loading loading={loading} />
      <Box
        sx={{
          my: 6,
        }}
      >
        {error && <Alert severity="error">No movies to show!</Alert>}
      </Box>
    </Container>
  )
}

export default Home
