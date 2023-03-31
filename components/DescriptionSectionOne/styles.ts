import styled from 'styled-components';
import { media } from '@/utils/styles/breakpoints';

export const DescriptionSectionOneWrapper = styled.section`
  background-color: rgba(var(--background));

  ${media.desktop} {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: min(100vh, 600px);
    padding: 6rem 0;
  }

  .description-section-one-container {
    margin: 0 auto;
    padding: 1rem;
    height: 100%;
    max-width: var(--max-width);
    display: flex;
    flex-direction: column;

    ${media.desktop} {
      padding: 0;
      flex-direction: row;
    }

    article {
      margin-bottom: 2rem;

      ${media.desktop} {
        width: 70%;
        margin: auto;
        padding-left: 1rem;
      }

      > h2 {
        margin-bottom: 1rem;

        ${media.desktop} {
          font-size: 2rem;
          margin-bottom: 3.3rem;
        }
      }

      > h3 {
        margin-bottom: 1rem;
        color: rgba(var(--accent-secondary));

        ${media.desktop} {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1.8rem;
        }
      }

      > p {
        font-size: 1rem;

        ${media.desktop} {
          font-size: 1.25rem;
          font-weight: 400;
          line-height: 2rem;
        }
      }
    }

    .cards-section {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;
      
      ${media.desktop} {
        margin: auto;
      }
    }
  }
`;
