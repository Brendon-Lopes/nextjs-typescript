import { FooterWrapper } from "./styles";
import * as content from '@/utils/footer';
import Image from "next/image";

export default function Footer() {
  return (
    <FooterWrapper>
      <div className="footer-container">
        <section className="footer-main">
          <Image className="logo" src="/hvex.svg" width={123} height={57} alt="Logo" />

          <section data-testid="footer__address-section" className="footer-info">
            <h4>{content.address.title}</h4>
            <p className="address">{content.address.content}</p>
          </section>

          <section data-testid="footer__contact-section" className="footer-info">
            <h4>{content.contact.title}</h4>
            <p>{content.contact.number}</p>
            <p>{content.contact.email}</p>
          </section>

          <section data-testid="footer__socials-section" className="socials-container">
            <h4>{content.social.title}</h4>
            <section className="socials">
              {content.social.items.map(({ id, src, alt }) => (
                <div key={id} className="social-icon">
                  <Image src={src} width={24} height={24} alt={alt} data-testid={`footer__social-icon-${id}`} />
                </div>
              ))}
            </section>
          </section>
        </section>

        <hr />

        <section data-testid="footer__policies-section" className="policies-section">
          <p>{content.policies.rights}</p>
          <section className="buttons-section">
            <button className="policy-button">{content.policies.privacy}</button>
            <button className="policy-button">{content.policies.terms}</button>
          </section>
        </section>
      </div>
    </FooterWrapper>
  )
}
