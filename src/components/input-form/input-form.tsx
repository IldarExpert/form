import React, {useEffect, useRef} from 'react';
import styles from './input-form.module.scss';
import {InputFormProps} from './input-form.props';

const InputForm = ({label,  defaultValue, inputError = false, style, ...props}: InputFormProps): JSX.Element => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current && defaultValue) {
      inputRef.current.value = defaultValue;
    }
  }, [defaultValue])

  return (
    <div style={style} className={`${styles.wrapper}`}>
      <label
        className={styles.label}
        htmlFor=""
      >
        {label}
      </label>
      <input
        className={`${styles.input} ${inputError? styles.error: ''}`}
        ref={inputRef}
        {...props}
      />
    </div>
  );
};

export default InputForm;
