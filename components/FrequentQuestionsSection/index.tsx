import { FrequentQuestionsSectionWrapper } from "./styles"
import { title, questions } from "@/utils/frequentQuestionsSection";
import { ExpandableCard } from "@/components";

export default function FrequentQuestionsSection() {
  return (
    <FrequentQuestionsSectionWrapper>
      <div className="frequent-questions-container">
        <h2>{title}</h2>
        <div className="questions-container">
          {questions.map(({ id, question, answer }) => (
            <ExpandableCard key={id} title={question} content={answer} />
          ))}
        </div>
      </div>
    </FrequentQuestionsSectionWrapper>
  )
}
