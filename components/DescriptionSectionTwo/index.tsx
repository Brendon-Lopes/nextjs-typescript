import { DescriptionSectionTwoWrapper } from "./styles"
import { title, subtitle, description, descriptionCards } from "@/utils/descriptionSectionTwo"
import Image from "next/image"
import { DescriptionCardCircle } from "@/components"

export default function DescriptionSectionTwo() {
  return (
    <DescriptionSectionTwoWrapper>
      <div className="description-section-two-container">
        <Image
          className="image"
          src="/omnitrafo.png"
          alt="Omni trafo"
          width={568}
          height={817}
        />
        <div className="spacer-container">
          <div className="spacer"></div>

          <section className="article-cards-section">
            <article>
              <h2>{title}</h2>
              <hr />
              <h3>{subtitle}</h3>
              <p>{description}</p>
            </article>

            <section className="cards-section">
              {descriptionCards.map(({ id, src, caption }) => (
                <DescriptionCardCircle key={id} src={src} caption={caption} />
              ))}
            </section>
          </section>
        </div>
      </div>
    </DescriptionSectionTwoWrapper>
  )
}
