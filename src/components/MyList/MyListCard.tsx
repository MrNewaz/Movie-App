import { Button, Card, Chip } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import noImage from 'assets/no-image.png'
import { Link } from 'react-router-dom'
import { Movie } from 'types/MovieType'

const MyListCard = ({
  movie,
  handleRemove,
}: {
  movie: Movie
  handleRemove: (e: any, id: string) => void
}) => {
  return (
    <Box
      data-testid="mylist-card"
      component={Link}
      to={`/mylist/${movie.imdbID}`}
      sx={{
        height: '100%',
        width: '100%',
      }}
    >
      <Card
        sx={{
          height: '100%',
          borderRadius: 5,
          p: 3,
          '& img': {
            aspectRatio: '3/4',
            width: '100%',
            objectFit: 'cover',
            borderRadius: 5,
          },
        }}
      >
        <Box
          sx={{
            px: 5,
          }}
        >
          <img
            loading="lazy"
            src={movie.Poster === 'N/A' ? noImage : movie.Poster}
            alt={movie.Title}
          />
        </Box>
        <Box
          sx={{
            p: 2,
            bgcolor: 'grey.200',
            borderRadius: 5,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            textAlign: 'center',
          }}
        >
          <Typography
            sx={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
            variant="h6"
            gutterBottom
          >
            {movie.Title}
          </Typography>
          <Box>
            <Chip
              size="small"
              label={movie.Year}
              color="primary"
              sx={{ mr: 1 }}
            />
            <Chip size="small" label={movie.Type} color="primary" />
          </Box>
        </Box>
        <Button
          fullWidth
          variant="contained"
          color="error"
          onClick={(e) => handleRemove(e, movie.imdbID)}
        >
          Remove
        </Button>
      </Card>
    </Box>
  )
}

export default MyListCard
