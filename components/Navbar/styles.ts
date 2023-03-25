import styled from 'styled-components';

export const NavbarWrapper = styled.header`
  background-color: var(--navbar-background);
  display: flex;
  justify-content: center;

  .navbar-container {
    width: 100%;
    height: 6rem;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
  }

  .toggle-menu-button__bar {
    width: 100%;
    height: 14%;
    background-color: var(--white);
    border-radius: 0.2rem;
  }
`;
