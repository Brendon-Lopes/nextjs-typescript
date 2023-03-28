import styled from 'styled-components';

export const DescriptionCardCircleWrapper = styled.figure`
  display: flex;
  flex-direction: column;
  width: 9.125rem;
  aspect-ratio: 1;
  justify-content: center;
  align-items: center;

  .circle {
    width: 4.8rem;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: rgba(var(--dark-blue));
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.75rem;

    > img {
      width: 60%;
    }
  }

  figcaption {
    font-size: 0.9rem;
    color: rgba(var(--gray-text-variant));
    font-weight: 600;
    text-align: center;
  }
`;
