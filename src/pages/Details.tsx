import { Alert } from '@mui/lab'
import { Box, Button, Chip, Container, Typography } from '@mui/material'
import noImage from 'assets/no-image.png'
import LoadingCard from 'components/Loading/LoadingCard'
import { useStateContext } from 'context/Context'
import useSingleMovieSearch from 'hooks/useSingleMovieSearch'
import { useParams } from 'react-router-dom'

/// [Details] - Details page for the app
const Details = () => {
  const { id } = useParams()
  const { addToList, movieExists } = useStateContext()
  const { loading, error, movie } = useSingleMovieSearch(id as string)

  /// while loading show loading card
  if (loading) {
    return (
      <Container
        sx={{
          py: 3,
        }}
      >
        <LoadingCard />
      </Container>
    )
  }
  return (
    <Container
      sx={{
        py: 3,
      }}
    >
      <Box
        sx={{
          p: 5,
          bgcolor: 'grey.200',
          borderRadius: 5,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          '& img': {
            borderRadius: 5,
            width: { xs: '100%', sm: '50%' },
          },
        }}
      >
        <img
          loading="lazy"
          src={movie.Poster === 'N/A' ? noImage : movie.Poster}
          alt={movie.Title}
        />
        <br />
        <Typography align="center" variant="h4" gutterBottom>
          {movie.Title}
        </Typography>
        <Typography
          align="center"
          variant="subtitle2"
          color="grey"
          gutterBottom
        >
          {movie.Plot}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 1,
          }}
        >
          <Chip label={`${movie.Released} - ${movie.Country}`} />

          <Chip
            label={`IMDB Rating: ⭐${movie.imdbRating}(${movie.imdbVotes})`}
          />
          <Chip label={`Language: ${movie.Language}`} />
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 1,
            mt: 2,
          }}
        >
          {movie?.Genre?.split(', ')
            .map((genre) => genre.trim())
            .map((genre) => (
              <Chip key={genre} color="info" label={genre} />
            ))}
        </Box>
      </Box>

      <Button
        disabled={movieExists(id as string)}
        fullWidth
        onClick={() => addToList(movie)}
        variant="contained"
      >
        {movieExists(id as string) ? 'Already added to list!' : 'Add to List'}
      </Button>
      <Box
        sx={{
          my: 6,
        }}
      >
        {error && <Alert severity="error">Unexpected error ocurred</Alert>}
      </Box>
    </Container>
  )
}

export default Details
