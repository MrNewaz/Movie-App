import { render, screen } from '@testing-library/react'
import LoadingCard from './LoadingCard'

describe('LoadingCard Component', () => {
  it('renders correctly', () => {
    render(<LoadingCard />)

    const loadingCard = screen.getByTestId('loading-card')
    expect(loadingCard).toBeInTheDocument()
  })
})
