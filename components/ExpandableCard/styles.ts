import { media } from '@/utils/styles/breakpoints';
import styled from 'styled-components';

export const ExpandableCardWrapper = styled.section`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.625rem;
  box-shadow: 0px 10px 20px -5px rgba(0, 0, 0, 0.19);
  padding: 1rem;
  margin-bottom: 1.25rem;
  cursor: pointer;

  ${media.desktop} {
    min-width: 770px;
  }

  .question-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${props => props.theme.expanded ? '0.7rem' : '0'};

    > h3 {
      max-width: 90%;
      color: rgba(var(--dark-blue));
    }

    > svg {
      font-size: 1.1rem;
      color: rgba(var(--dark-blue));
      min-width: 1.125rem;
      transform: ${props => props.theme.expanded ? 'rotate(180deg)' : 'rotate(0deg)'};
      transition: transform 0.2s ease-in-out;
    }
  }

  h3, p {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  p {
    color: rgba(var(--gray-text));
  }

  hr {
    border: 1px solid rgba(217, 217, 217, 0.6);
    margin-bottom: 0.7rem;
  }
`;
