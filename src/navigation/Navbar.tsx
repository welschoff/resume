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
      <span className={styles.logo}>HW</span>
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
