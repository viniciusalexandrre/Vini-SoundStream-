import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";
import styles from './button.module.scss'

type ButtonProps = {
  text?: string;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>
  variant?: 'primary' | 'secondary' | 'carouselButton'
  size?: 'small' | 'medium' | 'large'
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ text, children, onClick, variant = 'primary', size = 'medium', ...props }: ButtonProps) => {

  // const handleClick = () => {
  //   onClick(true)
  // }


  return ( 
  <button className={`${styles[variant]} ${styles[size]}`} {...props}>
     
    {children}</button> );
};

export default Button;
