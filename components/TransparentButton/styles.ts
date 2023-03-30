import styled from 'styled-components';

export const TransparentButtonWrapper = styled.button`
  font-size: 1rem;
  font-weight: 400;
  border: 1px solid rgba(var(--accent-primary));
  color: rgba(var(--accent-primary));
  border-radius: 0.3rem;
  padding: 0.85rem 2rem;
  background: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: rgba(var(--accent-primary));
    color: rgba(var(--background));
  }
`;
