import { ReactNode } from 'react';
import styles from './ContactItem.module.scss';

export type ContactType = {
  icon: ReactNode | string;
  title: string;
  link?: string;
};

function ContactItem({ title, icon, link: href }: ContactType) {
  const renderIcon =
    typeof icon === 'string' ? (
      <img src={icon} alt={title} className={styles.iconImage} />
    ) : (
      icon
    );

  const content = (
    <>
      <div className={styles.icon}>{renderIcon}</div>
      <h3>{title}</h3>
    </>
  );

  return href ? (
    <a
      href={href}
      className={styles.contactItemContainer}
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  ) : (
    <div className={styles.contactItemContainer}>{content}</div>
  );
}

export default ContactItem;
