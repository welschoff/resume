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
        <div className={styles.name}>
          <img src={logo} alt={name} className={styles.logo} />
          <span>{name}</span>
        </div>
        <div className={styles.ratingValue}>
          <span>{rating}</span>
        </div>
      </div>
      <div className={styles.scale}>
        <div
          style={{
            width: `${width}%`,
            height: '100%',
            backgroundColor: '#007ced',
            borderRadius: '10px',
          }}
        ></div>
      </div>
    </div>
  );
}

export default SkillComponent;
