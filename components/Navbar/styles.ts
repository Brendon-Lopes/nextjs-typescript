import styled from 'styled-components';

export const NavbarWrapper = styled.header`
  background-color: rgba(var(--navbar-background));
  display: flex;
  justify-content: center;

  .navbar-container {
    width: 100%;
    height: 6rem;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
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
    transition: all 0.2s ease-in-out;
    /* From https://css.glass */
    background: rgba(var(--navbar-background), 0.8);
    backdrop-filter: blur(7px);
    -webkit-backdrop-filter: blur(7px);
    border-left: 1px solid rgba(var(--white), 0.37);
  }

  .navbar__list {
    display: flex;
    flex-direction: column;
  }

  .navbar__item {
    padding: 0.5rem 0;
    font-size: 1.2rem;
    font-weight: 500;
  }

  .navbar__item:first-child {
    color: rgba(var(--accent-primary));
  }

  .hidden {
    transform: translateX(100%);
  }

  .buy-now-button {
    font-size: 1.2rem;
    border: 1px solid rgba(var(--accent-primary));
    color: rgba(var(--accent-primary));
    border-radius: 0.3rem;
    margin-top: 1rem;
    padding: 0.85rem 2rem;
    background: none;
  }
`;
