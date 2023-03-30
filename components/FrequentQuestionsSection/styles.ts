import { media } from '@/utils/styles/breakpoints';
import styled from 'styled-components';

export const FrequentQuestionsSectionWrapper = styled.section`
  color: rgba(var(--dark-blue));
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;

  .frequent-questions-container {
    max-width: 48.125rem;
  }

  h2 {
    font-size: 1.8rem;
    text-align: center;
    margin-bottom: 2rem;
    margin-top: 1.5rem;

    ${media.desktop} {
      font-size: 2rem;
      margin-top: 5.1rem;
      margin-bottom: 4rem;
    }
  }
`;
