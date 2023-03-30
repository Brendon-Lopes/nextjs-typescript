import styled from 'styled-components';
import { media } from '@/utils/styles/breakpoints';

export const NavbarWrapper = styled.header`
  background-color: rgba(var(--navbar-background));
  display: flex;
  justify-content: center;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  z-index: 999;
  border: none;

  .navbar-container {
    width: 100%;
    height: 6rem;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${media.desktop} {
      max-width: var(--max-width);
    }
  }

  .logo {
    margin-top: -0.75rem;
  }

  .toggle-menu-button {
    width: 2.5rem;
    height: 1.75rem;
    border: none;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 9999;

    ${media.desktop} {
      display: none;
    }
  }

  .toggle-menu-button__bar {
    width: 100%;
    height: 14%;
    background-color: rgba(var(--white));
    border-radius: 0.2rem;
  }

  .navbar {
    padding-top: 6.5rem;
    padding-left: 1rem;
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    width: 60%;
    max-width: 24rem;
    transition: all 0.2s ease-in-out;
    /* From https://css.glass */
    background: rgba(var(--navbar-background), 0.8);
    backdrop-filter: blur(7px);
    -webkit-backdrop-filter: blur(7px);
    border-left: 1px solid rgba(var(--white), 0.37);

    > ul > li > button {
      margin-top: 1rem;
    }

    ${media.desktop} {
      position: static;
      width: 100%;
      max-width: 100%;
      height: 100%;
      padding: 0;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      background: none;
      backdrop-filter: none;
      -webkit-backdrop-filter: none;
      border-left: none;

      > ul > li > button {
        margin-top: 0;
      }
    }
  }

  .navbar__list {
    display: flex;
    flex-direction: column;

    ${media.desktop} {
      flex-direction: row;
      align-items: center;
    }
  }

  .navbar__item {
    padding: 0.5rem 0;
    font-size: 1.25rem;
    font-weight: 700;

    &:first-child {
      color: rgba(var(--accent-primary));

      .navbar__link {
        &::after {
          background-color: rgba(var(--accent-primary));
        }
      }
    }

    ${media.desktop} {
      font-size: 1rem;
      padding: 0 3rem;
    }
  }

  .navbar__link {
    position: relative;

    &:hover {
      &::after {
        transform: scaleX(1);
      }
    }

    &::after {
      content: '';
      position: absolute;
      top: 1.4rem;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: white;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.2s ease-in-out;
    }
  }

  .hidden {
    transform: translateX(100%);

    ${media.desktop} {
      transform: translateX(0);
    }
  }
`;
