import React from 'react';
import {ButtonProps} from './button.props';
import styles from './button.module.scss';

const Button = ({children, color = 'blue', onClick, type, ...props}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
                  ${styles.button}
                  ${color === 'green'? styles.green: ''}
                  ${color === 'blue'? styles.blue: ''}
                  `}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
