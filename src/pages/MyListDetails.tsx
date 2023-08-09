import { Box, Button, Chip, Container, Typography } from '@mui/material'
import noImage from 'assets/no-image.png'
import { useStateContext } from 'context/Context'
import { useNavigate, useParams } from 'react-router-dom'
import Movie from 'types/MovieType'

const MyListDetails = () => {
  const { id } = useParams()
  const { getMovieById, removeFromList } = useStateContext()

  const movie = getMovieById(id as string) as Movie

  const navigate = useNavigate()

  const handleRemove = () => {
    removeFromList(id as string)
    navigate('/mylist')
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
          {movie.Genre.split(', ')
            .map((genre: string) => genre.trim())
            .map((genre: string) => (
              <Chip key={genre} color="info" label={genre} />
            ))}
        </Box>
      </Box>

      <Button
        fullWidth
        color="error"
        onClick={handleRemove}
        variant="contained"
      >
        Remove
      </Button>
    </Container>
  )
}

export default MyListDetails
