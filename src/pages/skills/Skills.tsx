import react from '../../assets/react.png';
import angular from '../../assets/angular.png';
import typescript from '../../assets/typescript.png';
import html from '../../assets/html.png';
import js from '../../assets/js.png';
import sass from '../../assets/sass.png';
import mongodb from '../../assets/mongodb.png';
import css from '../../assets/css.png';
import jest from '../../assets/jest.png';
import tailwind from '../../assets/tailwind.png';
import bootstrap from '../../assets/bootstrap.png';
import next from '../../assets/next.png';
import testcafe from '../../assets/testcafe.png';
import readyapi from '../../assets/readyapi.png';
import styles from './Skills.module.scss';
import postman from '../../assets/postman.png';
import cypress from '../../assets/cypress.png';
import SkillComponent from '../../components/SkillComponent/SkillComponent';
import CategoryComponent from '../../components/CategoryComponent/CategoryComponent';
import CertificateItem from '../../components/CertificateItem/CertificateItem';

function Skills() {
  return (
    <div className={styles.skillsContainer}>
      <div className={styles.col1}>
        <CategoryComponent
          title="Markup Language"
          skill={<SkillComponent logo={html} name="HTML5" rating="90%" />}
        />
        <div className={styles.divider}></div>
        <CategoryComponent
          title="Frontend Frameworks & Libraries"
          skill={
            <>
              <SkillComponent logo={react} name="React" rating="80%" />
              <SkillComponent logo={angular} name="Angular" rating="75%" />
              <SkillComponent logo={next} name="Next.js" rating="60%" />
              <SkillComponent
                logo={tailwind}
                name="Tailwind CSS"
                rating="60%"
              />
              <SkillComponent logo={bootstrap} name="Bootstrap" rating="70%" />
            </>
          }
        />
      </div>
      <div className={styles.col2}>
        <CategoryComponent
          title="Styling Languages"
          skill={
            <>
              <SkillComponent logo={css} name="CSS3" rating="90%" />
              <SkillComponent logo={sass} name="SCSS" rating="90%" />
            </>
          }
        />
        <div className={styles.divider}></div>
        <CategoryComponent
          title="API Tools"
          skill={
            <>
              <SkillComponent logo={readyapi} name="ReadyAPI" rating="80%" />
              <SkillComponent logo={postman} name="Postman" rating="80%" />
            </>
          }
        />
        <div className={styles.divider}></div>
        <CategoryComponent
          title="Scripting Languages"
          skill={
            <>
              <SkillComponent
                logo={typescript}
                name="Typescript"
                rating="80%"
              />
              <SkillComponent logo={js} name="JavaScript" rating="80%" />
            </>
          }
        />
      </div>
      <div className={styles.col3}>
        <CategoryComponent
          title="Database"
          skill={
            <>
              <SkillComponent logo={mongodb} name="MongoDB" rating="75%" />
            </>
          }
        />
        <div className={styles.divider}></div>
        <CategoryComponent
          title="Testing Frameworks"
          skill={
            <>
              <SkillComponent logo={jest} name="Jest" rating="50%" />
              <SkillComponent logo={cypress} name="Cypress" rating="55%" />
              <SkillComponent logo={testcafe} name="Testcafe" rating="60%" />
            </>
          }
        />
      </div>
    </div>
  );
}

export default Skills;
