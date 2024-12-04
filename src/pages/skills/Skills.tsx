import react from '../../assets/react.png';
import angular from '../../assets/angular.png';
import typescript from '../../assets/typescript.png';
import html from '../../assets/html.png';
import js from '../../assets/js.png';
import sass from '../../assets/sass.png';
import styles from './Skills.module.scss';
import SkillComponent from '../../components/SkillComponent/SkillComponent';

function Skills() {
  return (
    <div className={styles.container}>
      <div className={styles.skills}>
        <SkillComponent logo={html} name="HTML5" rating="80%" />
        <SkillComponent logo={typescript} name="Typescript" rating="75%" />
        <SkillComponent logo={js} name="JavaScript" rating="75%" />
        <SkillComponent logo={react} name="React" rating="80%" />
        <SkillComponent logo={angular} name="Angular" rating="75%" />
        <SkillComponent logo={sass} name="SCSS" rating="90%" />
      </div>
    </div>
  );
}

export default Skills;
