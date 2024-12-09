import react from '../../assets/react.png';
import angular from '../../assets/angular.png';
import typescript from '../../assets/typescript.png';
import html from '../../assets/html.png';
import js from '../../assets/js.png';
import sass from '../../assets/sass.png';
import mongodb from '../../assets/mongodb.png';
import css from '../../assets/css.png';
import jest from '../../assets/jest.png';
import styles from './Skills.module.scss';
import SkillComponent from '../../components/SkillComponent/SkillComponent';
import CategoryComponent from '../../components/CategoryComponent/CategoryComponent';

function Skills() {
  return (
    <div className={styles.skillsContainer}>
      <CategoryComponent
        title="Markup Language"
        skill={<SkillComponent logo={html} name="HTML5" rating="20%" />}
      />
      <CategoryComponent
        title="Scripting Languages"
        skill={
          <>
            <SkillComponent logo={typescript} name="Typescript" rating="75%" />
            <SkillComponent logo={js} name="JavaScript" rating="75%" />
          </>
        }
      />
      <CategoryComponent
        title="Frameworks & Libraries"
        skill={
          <>
            <SkillComponent logo={react} name="React" rating="80%" />
            <SkillComponent logo={angular} name="Angular" rating="75%" />
            <SkillComponent logo={jest} name="Jest" rating="90%" />
          </>
        }
      />
      <CategoryComponent
        title="Styling Languages"
        skill={
          <>
            <SkillComponent logo={css} name="CSS3" rating="90%" />
            <SkillComponent logo={sass} name="SCSS" rating="90%" />
          </>
        }
      />
      <CategoryComponent
        title="Database"
        skill={
          <>
            <SkillComponent logo={mongodb} name="MongoDB" rating="90%" />
          </>
        }
      />
    </div>
  );
}

export default Skills;
