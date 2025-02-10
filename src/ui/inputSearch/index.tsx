import Image from "next/image";
import { InputHTMLAttributes } from "react";
import style from "./inputSerch.module.scss";

type InputSearchProps = {
  text?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const InputSearch = ({ type = "text", ...props }: InputSearchProps) => {
  return (
    <form className={style.container}>
      <input type={type} {...props} />
      <button type="submit">
        <Image
          alt={"Icon de pesquisa"}
          src={"/search.svg"}
          width={"20"}
          height={"20"}
        />
      </button>
    </form>
  );
};

export default InputSearch;
