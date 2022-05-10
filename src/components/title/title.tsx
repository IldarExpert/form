import React from 'react';
import {TitleProps} from './title.props';
import styles from './title.module.scss'

const Title = ({children, ...props}: TitleProps): JSX.Element => {
  return (
    <h1
      className={styles.title}
      {...props}
    >
      {children}
    </h1>
  );
};

export default Title;
