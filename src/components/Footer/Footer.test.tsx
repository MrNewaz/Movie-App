import { render, screen } from '@testing-library/react'
import Footer from './Footer' // Adjust the path based on your project structure

describe('Footer Component', () => {
  it('renders the copyright text correctly', () => {
    render(<Footer />)
    const currentYear = new Date().getFullYear()
    const expectedText = `Copyright © ${currentYear}. All rights reserved by Newaz.`

    const copyrightText = screen.getByText(expectedText)
    expect(copyrightText).toBeInTheDocument()
  })
})
