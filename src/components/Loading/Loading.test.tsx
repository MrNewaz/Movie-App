import { render, screen } from '@testing-library/react'
import Loading from './Loading'

describe('Loading Component', () => {
  it('renders LoadingCard components', () => {
    render(<Loading loading={true} />)

    const loadingCards = screen.getAllByTestId('loading-card')
    expect(loadingCards).toHaveLength(2)
  })

  it('does not render any LoadingCard components when not loading', () => {
    render(<Loading loading={false} />)

    const loadingCards = screen.queryByTestId('loading-card')
    expect(loadingCards).toBeNull()
  })
})
