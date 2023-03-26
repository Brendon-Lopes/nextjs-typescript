import styled from 'styled-components';
import { media } from '@/utils/styles/breakpoints';

export const DescriptionCardWrapper = styled.figure`
  background-color: rgba(var(--accent-secondary), 0.08);
  border-radius: 0.625rem;
  border: 1px solid rgba(var(--accent-secondary));
  width: 9.5rem;
  height: 9.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;

  ${media.desktop} {
    width: 15.5rem;
    height: 15.5rem;
    gap: 1.5rem;
  }

  img {
    ${media.desktop} {
      width: 7rem;
      height: 7rem;
    }
  }

  figcaption {
    text-align: center;
    font-size: 0.9rem;
    font-weight: 600;
    color: rgba(var(--accent-secondary));

    ${media.desktop} {
      font-size: 1.5rem;
      font-weight: 700;
    }
  }
`;
