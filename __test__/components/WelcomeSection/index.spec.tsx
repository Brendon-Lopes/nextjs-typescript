import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { WelcomeSection } from '@/components';
import * as content from '@/utils/welcomeSection';
import normalizeText from '@/utils/functions/normalizeText';

describe('WelcomeSection Component', () => {
  it('should render properly', () => {
    render(<WelcomeSection />);

    const image1 = screen.getByAltText('barragem');
    const images = screen.getAllByAltText('redes elétricas');
    const title = screen.getByText(normalizeText(content.title));
    const description = screen.getByText(normalizeText(content.description));
    const list = screen.getByRole('list');
    const listItems = screen.getAllByRole('listitem');

    expect(image1).toBeInTheDocument();

    images.forEach(image => {
      expect(image).toBeInTheDocument();
    });

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(list).toBeInTheDocument();
    expect(listItems).toHaveLength(content.items.length);
  });
});
