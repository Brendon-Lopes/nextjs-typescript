import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DescriptionCard } from '@/components';

describe('DescriptionCard Component', () => {
  it('should render properly', () => {
    render(<DescriptionCard src="/src" caption="caption" />);

    const image = screen.getByRole('img');
    const caption = screen.getByText('caption');

    expect(image).toBeInTheDocument();
    expect(caption).toBeInTheDocument();
  });
});
