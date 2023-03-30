import { media } from '@/utils/styles/breakpoints';
import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: rgba(var(--dark-blue));
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.desktop} {
    padding: 4rem 1rem 2rem 1rem;
  }

  .footer-main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;

    ${media.desktop} {
      max-width: var(--max-width);
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      gap: 7.5rem;
    }
  }

  .logo {
    margin: 0 auto;
  }

  .footer-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    gap: 1rem;
    margin-bottom: 0.5rem;
  }

  h4 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.2rem;
    color: rgba(var(--accent-secondary));

    ${media.desktop} {
      margin-bottom: 1.75rem;
    }
  }

  .address {
    line-height: 1.6;
  }

  .socials-container {
    > h4 {
      margin-bottom: 1.8rem;
    }

    ${media.desktop} {
      > h4 {
        margin-bottom: 2.5rem;
      }
    }
  }

  .socials {
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;
    gap: 2rem;
  }

  .social-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3.125rem;
    height: 3.125rem;
    background-color: rgba(var(--accent-primary));
    border-radius: 50%;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      box-shadow: 0 0 8px 2px rgba(var(--accent-primary), 0.7);
    }
  }

  hr {
    margin: 2rem 0;
    border: 1px solid rgba(var(--white));

    ${media.desktop} {
      margin-top: 4rem;
    }
  }

  .policies-section {
    ${media.desktop} {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .buttons-section {
    margin-top: 1.5rem;
    display: flex;
    justify-content: space-between;

    ${media.desktop} {
      gap: 7.5rem;
      margin: auto 0;
    }
  }

  .policy-button {
    border: none;
    background-color: transparent;
    font-size: 1rem;
    color: rgba(var(--white));
  }
`;
