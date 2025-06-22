import type React from 'react';
import { Link } from 'react-router';

export interface NavLink {
  label: string;
  href: string;
  emoji: string;
}

interface HeaderProps {
  title: string;
  navLinks: NavLink[];
}

export const Header: React.FC<HeaderProps> = ({ title, navLinks }) => {
  function toggleMenu() {
    (
      document.getElementById('header__nav-mobile') as HTMLElement
    ).classList.toggle('show');
  }

  const renderNavLinks = () => {
    return navLinks.map((link, index) => (
      <Link to={`/${link.href}`} key={index}>
        {link.label}
        <span className={`header__emoji-${link.label.toLowerCase()}`}>
          {link.emoji}
        </span>
      </Link>
    ));
  };

  return (
    <header>
      <section className="header-title-line">
        <p>{title}</p>
        <button className="header__button" onClick={toggleMenu}>
          <i className="fa-solid fa-compass" />
        </button>
        <nav>{renderNavLinks()}</nav>
      </section>
      <section className="header__section-mobile">
        <nav id="header__nav-mobile" className="header__nav-mobile">
          {renderNavLinks()}
        </nav>
      </section>
    </header>
  );
};
