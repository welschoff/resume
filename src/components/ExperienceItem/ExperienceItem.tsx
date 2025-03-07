import styles from './ExperienceItem.module.scss';

export type ExperienceItemProps = {
  range: string;
  title: string;
  activities: string[];
};

function ExperienceItem({ range, title, activities }: ExperienceItemProps) {
  return (
    <div className={styles.experienceItemContainer}>
      <div className={styles.range}>{range}</div>
      <h3>{title}</h3>
      <ul className={styles.activities}>
        {activities.map((activity: string) => (
          <li key={title}>{activity}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceItem;
