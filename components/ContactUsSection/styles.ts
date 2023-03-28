import { media } from '@/utils/styles/breakpoints';
import styled from 'styled-components';

export const ContactUsSectionWrapper = styled.section`
  background-color: rgba(var(--dark-blue-text));
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .contact-us-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    ${media.desktop} {
      gap: 1.8rem;
      text-align: center;
      align-items: center;
      max-width: 35.6rem;
    }
  }

  hr {
    border: 2px solid rgba(var(--accent-primary));

    ${media.desktop} {
      width: 11rem;
    }
  }

  button {
    margin: 0.6rem 0;
  }
`;
