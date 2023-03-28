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
    <ExpandableCardWrapper theme={{ expanded }}>
      <section onClick={toggleExpand} className="question-container">
        <h3>{title}</h3>
        <SlArrowDown strokeWidth={40} />
      </section>
      <hr hidden={!expanded} />
      <p hidden={!expanded}>{content}</p>
    </ExpandableCardWrapper>
  )
}
