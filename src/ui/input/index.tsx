import { InputHTMLAttributes } from "react";

type InputProps = {
  text?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({ type = "text", ...props }: InputProps) => {
  return <input type={type} {...props} />;
};

export default Input;
