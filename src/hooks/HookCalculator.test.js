import HookCalculator from "./HookCalculator"
import { render, screen, fireEvent } from '@testing-library/react';

const renderComponent = () => {
  render(<HookCalculator />)
}

beforeEach(() => {
  renderComponent()
})

describe('HookCalculator', () => {
  it('renders the number pad', () => {
    for(let i = 1; i < 10; i++) {
      const num = screen.getByText(i)
      expect(num).toBeInTheDocument()
    }
  })
  it('renders the display', async () => {
    fireEvent.click(screen.getByText('1'))

    const items = await screen.findAllByText('1')
    expect(items).toHaveLength(2)
  })
})