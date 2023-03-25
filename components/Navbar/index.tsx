import { NavbarWrapper } from "./styles";
import Image from "next/image";

export default function Navbar() {
  return (
    <NavbarWrapper>
      <section className="navbar-container">
        <Image className="logo" src="/hvex.svg" alt="Logo" width={123} height={57} />
        <button className="toggle-menu-button">
          <div className="toggle-menu-button__bar" aria-hidden="true"></div>
          <div className="toggle-menu-button__bar" aria-hidden="true"></div>
          <div className="toggle-menu-button__bar" aria-hidden="true"></div>
        </button>
        <nav className="navbar">
          <ul className="navbar__list">
            <li className="navbar__item">
              <a className="navbar__link" href="#">
                Omni trafo
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </NavbarWrapper>
  );
}
