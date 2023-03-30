import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ExpandableCard } from '@/components';

describe('ExpandableCard component', () => {
  it('should render the ExpandableCard component', () => {
    render(<ExpandableCard title="Title" content="Content" />);

    const title = screen.getByText('Title');
    const content = screen.getByText('Content');
    const icon = screen.getByTestId('expandable-card-icon');

    expect(title).toBeInTheDocument();
    expect(content).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });

  it('should toggle the card expansion on click', () => {
    render(<ExpandableCard title="Title" content="Content" />);

    const content = screen.getByText('Content');
    const title = screen.getByTestId('expandable-card__title-section');

    expect(content).toBeInTheDocument();
    expect(content).toHaveStyle('display: block');

    fireEvent.click(title);

    expect(content).toHaveStyle('display: none');
  })
});
