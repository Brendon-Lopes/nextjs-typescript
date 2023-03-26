import { WelcomeSectionWrapper } from "./styles";
import Image from "next/image";
import { title, description, items } from '@/utils/welcomeSection'
import { CheckList } from "@/components";

export default function WelcomeSection() {
  return (
    <WelcomeSectionWrapper>
      <div className="welcome-section-container">
        <section className="images-section">
          <Image className="image-1" src="/welcome1.png" width={319} height={185} alt="barragem" />
          <Image className="image-2" src="/welcome2.png" width={553} height={388} alt="redes elétricas" />
          <div className="image-3">
            <div className="image-3-transformer">
              <Image src="/welcome3.png" className="image-3-1" width={204} height={306} alt="redes elétricas" />
              <Image src="/welcome3-transformer.png" className="image-3-2" width={204} height={343} aria-hidden="true" alt="" />
            </div>
          </div>
        </section>

        <article>
          <h2>{title}</h2>

          <p>{description}</p>

          <CheckList items={items} src="/check.svg" />
        </article>
      </div>
    </WelcomeSectionWrapper>
  )
}
