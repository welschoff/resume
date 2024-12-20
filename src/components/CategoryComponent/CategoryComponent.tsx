import styles from './CategoryComponent.module.scss';

export type CategoryProps = {
  title: string;
  skill: React.ReactNode;
};

function CategoryComponent({ title, skill }: CategoryProps) {
  return (
    <div className={styles.categoryContainer}>
      <h3>{title}</h3>
      {skill}
    </div>
  );
}

export default CategoryComponent;
