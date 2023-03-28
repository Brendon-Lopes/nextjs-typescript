import styled from 'styled-components';
import { media } from '@/utils/styles/breakpoints';

export const DescriptionSectionThreeWrapper = styled.section`
  --image-original-width: 851px;
  --image-original-height: 879px;

  padding: 4rem 1rem;
  position: relative;
  background-color: rgba(244, 244, 244);
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.desktop} {
    height: 100vh;
    max-height: 800px;
    padding-top: 6rem;
  }

  .description-section-three-container {
    max-width: var(--max-width);
  }

  .bg-image {
    position: absolute;
    width: calc(var(--image-original-width) / 1.9);
    height: calc(var(--image-original-height) / 1.9);
    opacity: 0.42;

    ${media.desktop} {
      width: calc(var(--image-original-width) / 1.1);
      height: calc(var(--image-original-height) / 1.1);
      opacity: 1;
      top: -4rem;
      right: -6rem;
    }
  }

  h2 {
    font-size: 2rem;
    color: rgba(var(--dark-blue));
    margin-bottom: 1.6rem;
  }

  hr {
    border: 2px solid rgba(var(--accent-primary));
    width: 11rem;
    margin-bottom: 2.6rem;
  }

  h2, ul, hr {
    position: relative;
    z-index: 10;
  }

  .content {
    ${media.desktop} {
      display: flex;
    }
  }

  .main-content {
    ${media.desktop} {
      width: 55%;
    }
  }

  .spacer {
    ${media.desktop} {
      width: 45%;
    }
  }
`;
