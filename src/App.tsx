import { CssBaseline } from '@mui/material'
import { blue } from '@mui/material/colors'
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles'
import Footer from 'components/Footer/Footer'
import Navbar from 'components/Navbar/Navbar'
import AppRoutes from 'Routes'
import ScrollToTop from 'utils/ScrollToTop'

const App = () => {
  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: blue,
      secondary: {
        main: '#ffffff',
      },
    },
    typography: {
      fontFamily: 'Quicksand',
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
      button: {
        textTransform: 'none',
      },
    },
  })
  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <CssBaseline />
      <ScrollToTop />
      <Navbar />
      <AppRoutes />
      <Footer />
    </ThemeProvider>
  )
}

export default App
