import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';

function Navbar() {
  return (
    <header className={styles.navbar}>
      <h1>Hendrik Welschoff</h1>
      <nav className={styles.navLinks}>
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              textDecoration: isActive ? 'underline' : '',
            };
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/skills"
          style={({ isActive }) => {
            return {
              textDecoration: isActive ? 'underline' : '',
            };
          }}
        >
          Skills
        </NavLink>
        <NavLink
          to="/experience"
          style={({ isActive }) => {
            return {
              textDecoration: isActive ? 'underline' : '',
            };
          }}
        >
          Experience
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
