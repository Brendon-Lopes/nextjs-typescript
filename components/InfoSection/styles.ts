import { media } from '@/utils/styles/breakpoints';
import styled from 'styled-components';

export const InfoSectionWrapper = styled.section`
  --image-original-width: 568px;
  --image-original-height: 817px;

  background-color: rgba(var(--background));
  height: calc(100vh - 6rem);
  padding: 1rem;
  position: relative;
  display: flex;
  justify-content: center;

  .info-section-container {
    ${media.desktop} {
      max-width: var(--max-width);
      position: relative;
      height: 60%;
      margin: auto;
    }
  }

  article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3.2rem;
    z-index: 100;
    position: relative;

    ${media.desktop} {
      width: 75%;
    }
  }

  h1 {
    font-size: 2rem;

    ${media.desktop} {
      font-size: 3rem;
    }
  }

  p {
    font-size: 1.25rem;
  }

  .info-button {
    border: none;
    background-color: rgba(var(--accent-primary));
    color: rgba(var(--white));
    border-radius: 0.3rem;
    height: 3.125rem;

    ${media.desktop} {
      width: 17rem;
      height: 3.125rem;
    }
  }

  .whatsapp-button {
    border: none;
    border-radius: 50%;
    background-color: rgba(var(--accent-primary));
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    position: absolute;
    right: 1rem;
    z-index: 100;

    ${media.desktop} {
      width: 5rem;
      height: 5rem;
      right: 0;
    }
  }

  .image {
    width: calc(var(--image-original-width) / 1.4);
    height: calc(var(--image-original-height) / 1.4);
    position: absolute;
    top: 8rem;
    right: -3rem;
    z-index: 1;

    ${media.desktop} {
      width: var(--image-original-width);
      height: var(--image-original-height);
      top: auto;
      bottom: -2rem;
    }
  }

  button {
    font-size: 1.25rem;  

    :hover {
      background-color: rgba(var(--accent-secondary));
      cursor: pointer;
      color: rgba(var(--dark-blue-text));
    }
  }
`;
