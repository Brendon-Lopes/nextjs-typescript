import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DescriptionSectionThree } from '@/components';
import * as content from '@/utils/descriptionSectionThree';
import normalizeText from '@/utils/functions/normalizeText';

describe('DescriptionSectionThree Component', () => {
  it('should render properly', () => {
    render(<DescriptionSectionThree />);

    const image = screen.getByAltText('omni transformador');
    const title = screen.getByText(normalizeText(content.title));
    const items = screen.getAllByRole('listitem');

    expect(image).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(items).toHaveLength(content.items.length);
  });
});
