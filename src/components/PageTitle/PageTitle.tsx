import styles from './PageTitle.module.scss';

type HeaderProps = {
  title: string;
};

function PageTitle({ title }: HeaderProps) {
  return (
    <div className={styles.headerContainer}>
      <h1>{title}</h1>
    </div>
  );
}

export default PageTitle;
