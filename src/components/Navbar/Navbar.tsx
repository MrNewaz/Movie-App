import { Box, Button } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import { Link, useLocation } from 'react-router-dom'
import Page from 'types/PageType'
import { pages } from 'utils/constants'

/// [Navbar] - Navbar component for the app
const Navbar = () => {
  const location = useLocation()
  return (
    <AppBar position="static" data-testid="navbar">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ height: '100%' }} variant="dense">
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              fontWeight: 700,
            }}
          >
            Movie App
          </Typography>
          <Box style={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            {pages.map((page: Page) => (
              <Button
                key={page.to}
                color="inherit"
                variant={location.pathname === page.to ? 'outlined' : 'text'}
                component={Link}
                to={page.to}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Navbar
