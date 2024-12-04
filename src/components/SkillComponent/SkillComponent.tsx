import styles from './SkillComponent.module.scss';
import { BackgroundColor } from '../../../node_modules/@isaacs/cliui/node_modules/ansi-styles/index.d';

type SkillProps = {
  logo: string;
  name: string;
  rating: string;
};

function SkillComponent({ logo, name, rating }: SkillProps) {
  return (
    <div className={styles.container}>
      <div className={styles.technology}>
        <img src={logo} alt="Logo" />
        <span>{name}</span>
      </div>
      <div className={styles.scale}>
        <div
          style={{
            width: rating,
            height: '100%',
            backgroundColor: 'blue',
            borderRadius: '10px',
          }}
        ></div>
      </div>
    </div>
  );
}

export default SkillComponent;
