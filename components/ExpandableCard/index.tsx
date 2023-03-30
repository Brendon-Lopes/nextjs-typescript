import { useState } from "react";
import { ExpandableCardWrapper } from "./styles"
import { SlArrowDown } from "react-icons/sl";

interface IProps {
  title: string
  content: string
}

export default function ExpandableCard({ title, content }: IProps) {
  const [expanded, setExpanded] = useState(true)

  const toggleExpand = () => {
    setExpanded(!expanded)
  }

  return (
    <ExpandableCardWrapper onClick={toggleExpand} data-testid="expandable-card" theme={{ expanded }}>
      <section className="question-container" data-testid="expandable-card__title-section">
        <h3>{title}</h3>
        <SlArrowDown data-testid="expandable-card-icon" strokeWidth={40} />
      </section>
      <hr hidden={!expanded} />
      <p hidden={!expanded}>{content}</p>
    </ExpandableCardWrapper>
  )
}
