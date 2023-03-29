import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FrequentQuestionsSection } from '@/components';
import * as content from '@/utils/frequentQuestionsSection';
import normalizeText from '@/utils/functions/normalizeText';

describe('FrequentQuestionsSection', () => {
  it('should render the FrequentQuestionsSection component', () => {
    render(<FrequentQuestionsSection />);

    const title = screen.getByText(normalizeText(content.title));
    const cards = screen.getAllByTestId('expandable-card');

    expect(title).toBeInTheDocument();
    expect(cards).toHaveLength(content.questions.length);
  });
});
