import HookCalculator from "./HookCalculator"
import { render, screen } from '@testing-library/react';

const renderComponent = () => {
  render(<HookCalculator />)
}

beforeEach(() => {
  renderComponent()
})

describe('HookCalculator', () => {
  test('renders the number pad', () => {
    for(let i = 1; i < 10; i++) {
      const num = screen.getByText(i)
      expect(num).toBeInTheDocument()
    }
  })
})