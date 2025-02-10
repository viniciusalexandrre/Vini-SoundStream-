import Image from "next/image";
import { ButtonHTMLAttributes, ReactNode } from "react";

type perfilMenuProps = {
  children: ReactNode;
  image: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const perfilMenu = ({ children, image, ...props }: perfilMenuProps) => {
  return (
    <button {...props}>
      <Image src={image} alt="" width={"34"} height={"34"} />
      <span>{children}</span>
    </button>
  );
};

export default perfilMenu;
