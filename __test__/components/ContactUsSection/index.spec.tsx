import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ContactUsSection } from '@/components';
import * as content from '@/utils/contactUs';
import normalizeText from '@/utils/functions/normalizeText';

describe('ContactUsSection component', () => {
  it('should render properly', () => {
    render(<ContactUsSection />);
    const title = screen.getByText(normalizeText(content.title));

    const button = screen.getByText(/falar com um consultor/i);

    expect(title).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
