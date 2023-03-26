import { useState } from "react";
import { NavbarWrapper } from "./styles";
import Image from "next/image";
import { navItems } from "@/utils/navbar/navItems";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <NavbarWrapper>
      <section className="navbar-container">
        <Image className="logo" src="/hvex.svg" alt="Logo" width={123} height={57} />

        <button
          className="toggle-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <div className="toggle-menu-button__bar" aria-hidden="true"></div>
          <div className="toggle-menu-button__bar" aria-hidden="true"></div>
          <div className="toggle-menu-button__bar" aria-hidden="true"></div>
        </button>

        <nav className={`navbar ${isMenuOpen ? '' : 'hidden'}`}>
          <ul className="navbar__list">
            {navItems.map((item) => (
              <li key={item.id} className="navbar__item">
                <a className="navbar__link" href="#">
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <button className="buy-now-button">Comprar agora</button>
            </li>
          </ul>
        </nav>

      </section>
    </NavbarWrapper>
  );
}
