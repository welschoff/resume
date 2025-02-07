import { NavLink, To } from 'react-router-dom';
import styles from './Navbar.module.scss';
import { ReactNode } from 'react';

interface NavbarLinkProps {
  to: To;
  children: ReactNode;
}

function NavbarLink({ to, children }: NavbarLinkProps) {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        color: isActive ? 'white' : '',
      })}
    >
      {children}
    </NavLink>
  );
}

function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.logoContainer}>
        <div className={styles.svgContainer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width="40"
            height="40"
          >
            <path
              d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm5,17.75h-2v-4.75h-6v4.75h-2V6.25h2v4.75h6v-4.75h2v11.5Z"
              fill="var(--secondary-color)"
            />
          </svg>
        </div>
        <span>Hendrik Welschoff</span>
      </div>
      <nav className={styles.navLinks}>
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/skills">Skills</NavbarLink>
        <NavbarLink to="/resume">Resume</NavbarLink>
        <NavbarLink to="/contact">Contact</NavbarLink>
      </nav>
    </header>
  );
}

export default Navbar;
