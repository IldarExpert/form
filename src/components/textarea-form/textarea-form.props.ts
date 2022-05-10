import {CSSProperties, DetailedHTMLProps, TextareaHTMLAttributes} from 'react';

export interface TextareaFormProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>{
  label?: string,
  style?: CSSProperties | undefined,
  value?: string | undefined,
}
