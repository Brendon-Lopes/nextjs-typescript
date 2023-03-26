import { media } from '@/utils/styles/breakpoints';
import styled from 'styled-components';

const image1 = {
  width: 319,
  height: 185,
}

const image2 = {
  width: 553,
  height: 388,
}

const image31 = {
  width: 204,
  height: 306,
}

const image32 = {
  width: 204,
  height: 343,
}

export const WelcomeSectionWrapper = styled.section`
  color: rgba(var(--gray-text));
  height: 120vh;
  max-height: 800px;

  ${media.desktop} {
    height: 100vh;
    max-height: 100vh;
  }

  .welcome-section-container {
    max-width: var(--max-width);
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;

    ${media.desktop} {
      flex-direction: row;
      align-items: center;
    }
  }

  .images-section {
    height: 26rem;
    position: relative;
    display: flex;
    justify-content: center;
    padding-top: 1rem;

    ${media.desktop} {
      width: 50%;
      height: 100%;
    }
  }

  article {
    padding: 2rem 1rem;
    padding-top: 0;

    > h2 {
      font-size: 1.4rem;
      color: rgba(var(--dark-blue-title));
      margin-bottom: 1rem;
    }

    > p {
      font-size: 1rem;
      margin-bottom: 1rem;
    }

    ${media.desktop} {
      width: 50%;

      > h2 {
        font-size: 2rem;
        margin-bottom: 1.875rem;
      }

      > p {
        margin-bottom: 3.125rem;
        font-size: 1.25rem;
      }
    }
  }

  .image-1, .image-2, .image-3 {
    position: absolute;
  }

  .image-1 {
    width: calc(${image1.width}px / 2);
    height: calc(${image1.height}px / 2);
    z-index: 2;
    left: 50%;
    transform: translateX(-50%);

    ${media.desktop} {
      width: ${image1.width}px;
      height: ${image1.height}px;
      left: 20%;
      top: 6%;
      transform: translateX(0);
    }
  }

  .image-2 {
    width: calc(${image2.width}px / 2);
    height: calc(${image2.height}px / 2);
    z-index: 1;
    top: 15%;

    ${media.desktop} {
      width: ${image2.width}px;
      height: ${image2.height}px;
      top: 50%;
      transform: translateY(-60%);
    }
  }

  .image-3 {
    top: 50%;
    z-index: 2;
    left: 50%;

    ${media.desktop} {
      top: 50%;
    }
  }

  .image-3-transformer {
    position: relative;

    .image-3-1 {
      position: absolute;
      width: calc(${image31.width}px / 2);
      height: calc(${image31.height}px / 2);
    }

    .image-3-2 {
      position: absolute;
      width: calc(${image32.width}px / 2);
      height: calc(${image32.height}px / 2);
    }

    ${media.desktop} {
      .image-3-1 {
        width: ${image31.width}px;
        height: ${image31.height}px;
      }

      .image-3-2 {
        width: ${image32.width}px;
        height: ${image32.height}px;
      }
    }
  }
`;
