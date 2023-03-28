import styled from 'styled-components';
import { media } from '@/utils/styles/breakpoints';

export const TransparentButtonWrapper = styled.button`
  font-size: 1rem;
  font-weight: 400;
  border: 1px solid rgba(var(--accent-primary));
  color: rgba(var(--accent-primary));
  border-radius: 0.3rem;
  margin-top: 1rem;
  padding: 0.85rem 2rem;
  background: none;
  cursor: pointer;

  ${media.desktop} {
    margin-top: 0;
  }
`;
