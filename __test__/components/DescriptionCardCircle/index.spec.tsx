import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DescriptionCardCircle } from '@/components';

describe('DescriptionCardCircle Component', () => {
  it('should render properly', () => {
    render(<DescriptionCardCircle src="/src" caption="caption" />);

    const image = screen.getByAltText('caption');
    const caption = screen.getByText('caption');

    expect(image).toBeInTheDocument();
    expect(caption).toBeInTheDocument();
  });
});
