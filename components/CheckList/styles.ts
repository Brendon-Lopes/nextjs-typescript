import styled from 'styled-components';
import { media } from '@/utils/styles/breakpoints';

export const List = styled.ul`
  .list__item {
    display: flex;
    align-items: center;
    margin-bottom: 0.3rem;

    > img {
      width: 1.1rem;
      margin-right: 0.3rem;
    }

    > p {
      font-size: 0.9rem;
      font-weight: 600;
    }

    ${media.desktop} {
      margin-bottom: 1.875rem;

      > img {
        width: 1.25rem;
        margin-right: 1.875rem;
      }

      > p {
        font-size: 1.25rem;
        font-weight: 700;
      }
    }
  }
`;
