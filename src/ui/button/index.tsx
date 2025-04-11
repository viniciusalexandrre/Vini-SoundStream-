import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  text?: string;
  children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ text, children, ...props }: ButtonProps) => {
  return <button {...props}>{children}</button>;
};

export default Button;
