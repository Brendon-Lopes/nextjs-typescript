import { InfoSectionWrapper } from "./styles";
import { description, title } from "@/utils/infoSection";
import Image from "next/image";

export default function InfoSection() {
  return (
    <InfoSectionWrapper>
      <div className="info-section-container">
        <article>
          <h1>{title}</h1>
          <p>{description}</p>
          <button className="info-button">Quero mais informações</button>
        </article>
        <button className="whatsapp-button">
          <Image src="/whatsapp.svg" alt="whatsapp" width={40} height={40} />
        </button>
      </div>
      <Image
        className="image"
        src="/omnitrafo.png"
        alt="Omni trafo"
        width={568}
        height={817}
      />
    </InfoSectionWrapper>
  )
}
