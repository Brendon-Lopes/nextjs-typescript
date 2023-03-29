import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { InfoSection } from '@/components';
import * as content from '@/utils/infoSection';
import normalizeText from '@/utils/functions/normalizeText';

describe('InfoSection Component', () => {
  it('should render the article', () => {
    render(<InfoSection />);

    const article = screen.getByRole('article');
    const title = screen.getByText(normalizeText(content.title))
    const description = screen.getByText(normalizeText(content.description))
    const button = screen.getByRole('button', { name: /quero mais informações/i })
    const whatsappButton = screen.getByRole('button', { name: /whatsapp/i })
    const image = screen.getByRole('img', { name: /omni trafo/i })

    expect(article).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    expect(whatsappButton).toBeInTheDocument()
    expect(image).toBeInTheDocument()
  });
})
