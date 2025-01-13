import me from '../../assets/profilbild.jpeg';
import styles from './Home.module.scss';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.profile}>
        <img className={styles.me} src={me} alt="Profile picture" />
        <div className={styles.description}>
          <span className={styles.position}>Frontend Developer</span>
          <span className={styles.name}>Hendrik Welschoff</span>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
            earum animi nemo qui incidunt natus nostrum assumenda fugit, vero
            quia pariatur, quis aperiam eum magni laboriosam sed velit
            consequuntur molestias!
          </p>
          <div className={styles.logos}>
            <img className={styles.github} src={github} alt="" />
            <img className={styles.linkedin} src={linkedin} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
