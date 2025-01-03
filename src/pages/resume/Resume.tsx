import ExperienceItem from '../../components/ExperienceItem/ExperienceItem';
import styles from './Resume.module.scss';

function Resume() {
  return (
    <div className={styles.resumeContainer}>
      <div className={styles.experience}>
        <h3 className={styles.header}>Experience</h3>
        <ExperienceItem
          range="01/2024 - heute | adesso SE"
          title="Software Engineer"
          activities={[
            'Entwicklung eines MVP zur automatisierten Erfassung von Dokumenten in der Immobiliennranche',
            'Einsatz als technischer Tester bei einer öffentlichen Verwaltungseinrichtung',
          ]}
        />
        <ExperienceItem
          range="01/2023 - 12/2023 | adesso SE"
          title="Software Developer"
          activities={[
            'Einsatz als technischer Tester bei einer öffentlichen Verwaltungseinrichtung',
            'Professional Scrum Developer Zertifizierung',
          ]}
        />
        <ExperienceItem
          range="03/2022 - 12/2022 | adesso SE"
          title="Trainee Softwaredevelopment"
          activities={[
            'Frontendentwicklung eines internen Zeiterfassungssystems',
            'Frontendentwicklung eines Coachingtools für Fußballtrainer',
          ]}
        />
        <ExperienceItem
          range="09/2022 - 12/2021 | neue fische GmbH"
          title="Trainee Web Development"
          activities={[
            'Intensiv-Coding-Bootcamp in Vollzeit',
            '540 Stunden Programmierpraxis mit Eigenentwicklung einer Web App als Abschlussarbeit',
          ]}
        />
      </div>
    </div>
  );
}

export default Resume;
