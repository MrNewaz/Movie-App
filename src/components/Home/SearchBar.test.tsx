import { fireEvent, render, screen } from '@testing-library/react'
import SearchBar from './SearchBar'

describe('SearchBar Component', () => {
  it('calls handleSearch when input changes', () => {
    const handleSearchMock = jest.fn()
    render(<SearchBar handleSearch={handleSearchMock} />)

    const searchInput = screen.getByLabelText(
      'Search Movies... Example: Justice League'
    )
    fireEvent.change(searchInput, { target: { value: 'Justice League' } })

    expect(handleSearchMock).toHaveBeenCalledTimes(1)
  })
})
