import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DescriptionSectionOne } from '@/components';
import * as content from "@/utils/descriptionSectionOne";
import normalizeText from '@/utils/functions/normalizeText';

describe('DescriptionSectionOne Component', () => {
  it('should render properly', () => {
    render(<DescriptionSectionOne />);

    const title = screen.getByText(normalizeText(content.title));
    const subtitle = screen.getByText(normalizeText(content.subtitle));
    const description = screen.getByText(normalizeText(content.description));
    const cards = screen.getAllByRole('img');

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(cards).toHaveLength(content.descriptionCards.length);
  });
});
