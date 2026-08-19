import styles from './Navbar.module.scss';

function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.info}>
        <span className={styles.name}>Hendrik Welschoff</span>
        <span className={styles.position}>Frontend Engineer</span>
      </div>
      <nav className={styles.navLinks}>
        <a href="#home">About</a>
        <a href="#skills">Skills</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;
