import styles from './SkillComponent.module.scss';
import { useState, useEffect } from 'react';

type SkillProps = {
  logo: string;
  name: string;
  rating: string;
};

function SkillComponent({ logo, name, rating }: SkillProps) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(parseFloat(rating));
  }, [rating]);

  return (
    <div className={styles.container}>
      <div className={styles.technology}>
        <img src={logo} alt={name} className={styles.logo} />
        <span>{name}</span>
      </div>
      <div className={styles.scale}>
        <div
          style={{
            width: `${width}%`,
            height: '100%',
            backgroundColor: '#007ced',
            borderRadius: '10px',
            transition: 'width 0.5s ease-in',
          }}
        ></div>
      </div>
    </div>
  );
}

export default SkillComponent;
