import { Grid, useMediaQuery } from '@mui/material'
import Box from '@mui/material/Box'
import LoadingCard from './LoadingCard'

/// [Loading] - Loading component for the app
const Loading = ({ loading }: { loading: Boolean }) => {
  const isSmall = useMediaQuery('(max-width:500px)')
  return (
    <Box
      sx={{
        my: 3,
      }}
    >
      <Grid container spacing={3} alignItems="stretch">
        {loading &&
          Array(isSmall ? 1 : 2)
            .fill(0)
            .map((_, i) => (
              <Grid item xs={12} sm={6} key={i}>
                <LoadingCard />
              </Grid>
            ))}
      </Grid>
    </Box>
  )
}

export default Loading
