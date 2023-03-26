import { DescriptionCard } from "@/components";
import { DescriptionSectionOneWrapper } from "./styles";
import { subtitle, title, description, descriptionCards } from "@/utils/descriptionSectionOne";

export default function DescriptionSectionOne() {
  return (
    <DescriptionSectionOneWrapper>
      <div className="description-section-one-container">
        <article>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>{description}</p>
        </article>

        <section className="cards-section">
          {descriptionCards.map(({ id, src, caption }) => (
            <DescriptionCard key={id} src={src} caption={caption} />
          ))}
        </section>
      </div>
    </DescriptionSectionOneWrapper>
  )
}
