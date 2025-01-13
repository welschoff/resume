import ContactItem from '../../components/ContactItem/ContactItem';
import { Smartphone, Home, IconContext, Envelope } from 'react-flaticons';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import styles from './Contact.module.scss';

function Contact() {
  return (
    <IconContext.Provider value={{ color: '#007ced', size: '35px' }}>
      <div className={styles.contactContainer}>
        <div className={styles.items}>
          <ContactItem icon={<Smartphone />} title="+49 174 490 0720" />
          <ContactItem icon={<Home />} title="40233 Düsseldorf" />
          <ContactItem icon={<Envelope />} title="h.welschoff@gmx.de" />
          <ContactItem
            icon={github}
            title="welschoff"
            link="https://github.com/welschoff"
          />
          <ContactItem
            icon={linkedin}
            title="Hendrik Welschoff"
            link="https://www.linkedin.com/in/hendrik-welschoff-a7b929226/"
          />
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Contact;
