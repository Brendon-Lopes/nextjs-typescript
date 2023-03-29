import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CheckList } from '@/components';

describe('CheckList Component', () => {
  it('should render a list with the text "Checklist"', () => {
    render(<CheckList items={[{ id: 1, text: 'Checklist' }]} src="/src" />);

    const list = screen.getByRole('list');
    const listItem = screen.getByText('Checklist');

    expect(list).toContainElement(listItem);
  });
})
