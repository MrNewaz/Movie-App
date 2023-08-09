import { Box, Button, Card, Container, Grid, Typography } from '@mui/material'
import MyListCard from 'components/MyList/MyListCard'
import { useStateContext } from 'context/Context'
import { Link } from 'react-router-dom'

/// [MyList] - MyList page for the app
const MyList = () => {
  const { movieList, removeFromList } = useStateContext()

  /// handle remove from list
  const handleRemove = (e: any, id: string) => {
    e.preventDefault()
    removeFromList(id)
  }

  return (
    <Container
      sx={{
        py: 3,
      }}
    >
      <Card
        sx={{
          mb: 3,
          p: { xs: 2, sm: 3 },

          borderRadius: 5,
        }}
      >
        <Typography align="center" variant="h3">
          My Movie List
        </Typography>
      </Card>
      {movieList.length !== 0 ? (
        <Grid container spacing={3} alignItems="stretch">
          {movieList.map((movie) => (
            <Grid item xs={12} sm={6} key={movie.imdbID}>
              <MyListCard movie={movie} handleRemove={handleRemove} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box
          sx={{
            p: 5,
            bgcolor: 'grey.200',
            borderRadius: 5,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            List is empty
          </Typography>
          <Button variant="outlined" component={Link} to="/">
            Go to Home
          </Button>
        </Box>
      )}
    </Container>
  )
}

export default MyList
