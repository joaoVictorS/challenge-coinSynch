import { InputHTMLAttributes, ReactNode } from 'react';
import { appendStyles } from '@/utils/styles';
import styles from './styles.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  design: 'filled' | 'ghost';
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

export function Input(props: Props) {
  return (
    <div className={appendStyles([styles.wrapper_base, styles[props.design]])}>
      {props.label && <label>{props.label}</label>}
      <div className={styles.input_wrapper}>
        {props.iconLeft}
        <input {...props} />
        {props.iconRight}
      </div>
    </div>
  );
}
