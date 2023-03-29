import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Footer } from '@/components';
import * as content from '@/utils/footer';
import normalizeText from '@/utils/functions/normalizeText';

describe('Footer component', () => {
  it('should render the Footer component', () => {
    render(<Footer />);

    const logo = screen.getByAltText(/logo/i);
    const address = screen.getByTestId('footer__address-section');
    const contact = screen.getByTestId('footer__contact-section');
    const socials = screen.getByTestId('footer__socials-section');
    const policies = screen.getByTestId('footer__policies-section');

    expect(logo).toBeInTheDocument();
    expect(address).toBeInTheDocument();
    expect(contact).toBeInTheDocument();
    expect(socials).toBeInTheDocument();
    expect(policies).toBeInTheDocument();

    expect(address).toHaveTextContent(normalizeText(content.address.title));
    expect(address).toHaveTextContent(normalizeText(content.address.content));

    expect(contact).toHaveTextContent(normalizeText(content.contact.title));
    expect(contact).toHaveTextContent(normalizeText(content.contact.number));
    expect(contact).toHaveTextContent(normalizeText(content.contact.email));

    expect(socials).toHaveTextContent(normalizeText(content.social.title));
    content.social.items.forEach(({ id, src, alt }) => {
      const socialIcon = screen.getByTestId(`footer__social-icon-${id}`);
      expect(socialIcon).toBeInTheDocument();
      expect(socialIcon).toHaveAttribute('src', src);
      expect(socialIcon).toHaveAttribute('alt', alt);
    });

    expect(policies).toHaveTextContent(normalizeText(content.policies.rights));
    expect(policies).toHaveTextContent(normalizeText(content.policies.privacy));
    expect(policies).toHaveTextContent(normalizeText(content.policies.terms));
  });
});
