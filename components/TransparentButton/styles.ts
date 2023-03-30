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
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background: rgba(var(--accent-primary));
    color: rgba(var(--background));
  }

  &:active {
    box-shadow: 0 0 8px 2px rgba(var(--accent-primary), 0.5);
  }
`;
