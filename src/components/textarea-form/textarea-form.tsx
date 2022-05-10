import React, {useEffect, useRef} from 'react';
import {TextareaFormProps} from './textarea-form.props';
import styles from './textarea-form.module.scss';

const TextareaForm = ({label, value, disabled = false, style, ...props}: TextareaFormProps): JSX.Element => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (textareaRef.current && value) {
      textareaRef.current.value = value;
    }
  }, [value])

  return (
    <div style={style} className={styles.wrapper}>
      <label
        className={styles.label}
        htmlFor=""
      >
        {label}
      </label>
      <textarea
        className={styles.textarea}
        disabled={disabled}
        ref={textareaRef}
        rows={3}
        {...props}
      />
    </div>
  );
};

export default TextareaForm;
