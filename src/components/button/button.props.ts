import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from 'react';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  children: ReactNode,
  color?: string,
  onClick?: (e: any) => void,
  type?: "button" | "submit" | "reset" | undefined,
}
