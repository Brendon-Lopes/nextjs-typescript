import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TransparentButton } from '@/components';

describe('TransparentButton Component', () => {
  it('should render a button with the text "Click me"', () => {
    render(<TransparentButton>Click me</TransparentButton>);

    const button = screen.getByRole('button');

    expect(button).toHaveTextContent('Click me');
  });

  it('should render a button with a p tag inside', () => {
    render(<TransparentButton><p>Click me</p></TransparentButton>);

    const button = screen.getByRole('button');
    const p = screen.getByText('Click me');

    expect(button).toContainElement(p);
  })
})
