import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DescriptionSectionTwo } from '@/components';
import * as content from '@/utils/descriptionSectionTwo';
import normalizeText from '@/utils/functions/normalizeText';

describe('DescriptionSectionTwo Component', () => {
  it('should render properly', () => {
    render(<DescriptionSectionTwo />);

    const image = screen.getByAltText('Omni trafo');
    const title = screen.getByText(normalizeText(content.title));
    const subtitle = screen.getByText(normalizeText(content.subtitle));
    const description = screen.getByText(normalizeText(content.description));
    const cards = screen.getAllByRole('figure');

    expect(image).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(cards).toHaveLength(content.descriptionCards.length);
  });
});
