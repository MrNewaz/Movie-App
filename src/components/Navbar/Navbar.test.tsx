import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom' // Required for routing components
import Navbar from './Navbar'

describe('Navbar Component', () => {
  it('renders correctly', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )

    const navbar = screen.getByTestId('navbar')
    expect(navbar).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )

    const homeLink = screen.getByText('Home')
    const myListLink = screen.getByText('My List')

    expect(homeLink).toBeInTheDocument()
    expect(myListLink).toBeInTheDocument()
  })
})
