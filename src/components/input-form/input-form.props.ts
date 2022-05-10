import {CSSProperties, DetailedHTMLProps, InputHTMLAttributes} from 'react';

export interface InputFormProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
  label?: string,
  style?: CSSProperties | undefined,
  defaultValue?: string | undefined,
  disabled?: boolean,
  inputError?: boolean,
}
