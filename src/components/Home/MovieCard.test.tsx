import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom' // Required for routing components
import MovieCard from './MovieCard'

const mockMovie = {
  imdbID: '123',
  Title: 'Test Movie',
  Poster: 'test-poster.jpg',
  Year: '2023',
  Type: 'Movie',
  Genre: 'Action',
}

describe('MovieCard Component', () => {
  it('renders movie title', () => {
    render(
      <MemoryRouter>
        <MovieCard movie={mockMovie} />
      </MemoryRouter>
    )

    const titleElement = screen.getByText(mockMovie.Title)
    expect(titleElement).toBeInTheDocument()
  })

  it('renders movie year', () => {
    render(
      <MemoryRouter>
        <MovieCard movie={mockMovie} />
      </MemoryRouter>
    )

    const yearElement = screen.getByText(mockMovie.Year)
    expect(yearElement).toBeInTheDocument()
  })

  it('renders movie type', () => {
    render(
      <MemoryRouter>
        <MovieCard movie={mockMovie} />
      </MemoryRouter>
    )

    const typeElement = screen.getByText(mockMovie.Type)
    expect(typeElement).toBeInTheDocument()
  })
})
