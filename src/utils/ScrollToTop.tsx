import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/// [ScrollToTop] - for scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollToTop
