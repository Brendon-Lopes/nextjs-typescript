import styled from 'styled-components';
import { media } from '@/utils/styles/breakpoints';

export const DescriptionSectionTwoWrapper = styled.section`
  --image-original-width: 568px;
  --image-original-height: 817px;

  padding: 1rem;
  position: relative;
  z-index: 999;
  background-color: white;

  ${media.desktop} {
    height: 100vh;
    max-height: 800px;
    padding-top: 6rem;
  }

  .description-section-two-container {
    max-width: var(--max-width);
    margin: auto;
  }

  .image {
    width: calc(var(--image-original-width) / 1.9);
    height: calc(var(--image-original-height) / 1.9);
    position: absolute;
    top: 1rem;
    left: -3rem;
    z-index: -10;
    transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    opacity: 0.32;

    ${media.desktop} {
      opacity: 1;
      width: calc(var(--image-original-width) / 1.1);
      height: calc(var(--image-original-height) / 1.1);
      top: 3rem;
      bottom: -2rem;
    }
  }

  .spacer-container {
    ${media.desktop} {
      display: flex;
    }
  }

  .spacer {
    ${media.desktop} {
      width: 50%;
    }
  }

  .article-cards-section {
    ${media.desktop} {
      width: 60%;
    }
  }

  article {
    > * {
      margin-bottom: 1.5rem;
    }

    > h2 {
      color: rgba(var(--background));
      font-size: 2rem;
    }

    > hr {
      border: 2px solid rgba(var(--accent-primary));
      width: 11rem;
    }

    > h3 {
      color: rgba(var(--dark-blue));
      font-size: 2rem;
    }

    > p {
      color: rgba(var(--gray-text));
      font-size: 1.25rem;
    }
  }

  .cards-section {
    display: grid;
    margin: 0 auto;
    grid-template-columns: repeat(auto-fit, minmax(9.125rem, 1fr));
    gap: 0.9rem;
    justify-items: center;

    > :first-child > .circle > img {
      margin-bottom: 0.5rem;
    }
  }
`;
