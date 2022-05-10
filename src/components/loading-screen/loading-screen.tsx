import React from 'react';
import styles from './loading-screen.module.scss';

const LoadingScreen = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.rotate}>&lt; 💅🏾 &gt;</div>
    </div>
  );
};

export default LoadingScreen;
