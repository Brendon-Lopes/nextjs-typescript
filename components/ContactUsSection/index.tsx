import { ContactUsSectionWrapper } from "./styles";
import { TransparentButton } from "@/components";
import { title } from "@/utils/contactUs";

export default function ContactUsSection() {
  return (
    <ContactUsSectionWrapper>
      <div className="contact-us-container">
        <h2>{title}</h2>
        <hr />
        <TransparentButton>
          Falar com um consultor
        </TransparentButton>
      </div>
    </ContactUsSectionWrapper>
  )
}
