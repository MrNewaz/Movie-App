import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom' // Required for routing components
import MyListCard from './MyListCard'

const mockMovie = {
  imdbID: '123',
  Title: 'Test Movie',
  Poster: 'test-poster.jpg',
  Year: '2023',
  Type: 'Movie',
  Genre: 'Action',
}

describe('MyListCard Component', () => {
  it('renders correctly', () => {
    const handleRemoveMock = jest.fn()
    render(
      <MemoryRouter>
        <MyListCard movie={mockMovie} handleRemove={handleRemoveMock} />
      </MemoryRouter>
    )

    const myListCard = screen.getByTestId('mylist-card')
    expect(myListCard).toBeInTheDocument()
  })

  it('calls handleRemove when the remove button is clicked', () => {
    const handleRemoveMock = jest.fn()
    render(
      <MemoryRouter>
        <MyListCard movie={mockMovie} handleRemove={handleRemoveMock} />
      </MemoryRouter>
    )

    const removeButton = screen.getByText('Remove')
    fireEvent.click(removeButton)

    expect(handleRemoveMock).toHaveBeenCalledTimes(1)
    expect(handleRemoveMock).toHaveBeenCalledWith(
      expect.anything(),
      mockMovie.imdbID
    )
  })
})
