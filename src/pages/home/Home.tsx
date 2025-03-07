import me from '../../assets/profilbild.jpeg';
import styles from './Home.module.scss';

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.profile}>
        <img className={styles.me} src={me} alt="Profile picture" />
        <div className={styles.description}>
          <span className={styles.position}>Frontend Developer</span>
          <span className={styles.name}>Hendrik Welschoff</span>
          <p>
            Als leidenschaftlicher Frontend-Entwickler vereine ich Design und
            Funktionalität, um performante und benutzerfreundliche in HTML, CSS,
            JavaScript, TypeScript sowie React und Angular entwickle ich
            intuitive User Interfaces. Meine Stärken liegen in sauberer
            Code-Architektur, responsivem Design und Performance-Optimierung.
            Stets neugierig auf neue Technologien, setze ich innovative digitale
            Lösungen um.
          </p>
          <div className={styles.download}>
            <a href="/cv.pdf" download="cv.pdf">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
