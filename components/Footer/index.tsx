import { FooterWrapper } from "./styles";
import * as content from '@/utils/footer';
import Image from "next/image";

export default function Footer() {
  return (
    <FooterWrapper>
      <div className="footer-container">
        <Image className="logo" src="/hvex.svg" width={123} height={57} alt="Logo" />
        <section className="footer-info">
          <h4>{content.address.title}</h4>
          <p className="address">{content.address.content}</p>
        </section>
        <section className="footer-info">
          <h4>{content.contact.title}</h4>
          <p>{content.contact.number}</p>
          <p>{content.contact.email}</p>
        </section>
        <section className="socials-container">
          <h4>{content.social.title}</h4>
          <section className="socials">
            {content.social.items.map(({ id, src, alt }) => (
              <div key={id} className="social-icon">
                <Image src={src} width={24} height={24} alt={alt} />
              </div>
            ))}
          </section>
        </section>
      </div>
    </FooterWrapper>
  )
}
