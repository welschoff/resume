import ExperienceItem from '../../components/ExperienceItem/ExperienceItem';
import styles from './Experience.module.scss';

function Experience() {
  return (
    <div className={styles.experienceContainer}>
      <div className={styles.items}>
        <ExperienceItem
          range="01/2024 - heute"
          title="Software Engineer"
          activities={[
            'Einsatz als technischer Tester bei einer öffentlichen Verwaltungsehtung',
            'lorem',
          ]}
        />
        <ExperienceItem
          range="01/2023 - 12/2023"
          title="Software Developer"
          activities={['Lorem']}
        />
        <ExperienceItem
          range="03/2022 - 12/2022"
          title="Trainee Softwaredevelopment"
          activities={['Lorem']}
        />
      </div>
    </div>
  );
}

export default Experience;
