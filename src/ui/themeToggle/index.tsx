"use client";

import Image from "next/image";
import Button from "../button";
import style from "./themeToggle.module.scss";
import { useState } from "react";

const [click, setClick] = useState(false);

const handleClick = () => {
  setClick(!click);
};

const ThemeToglle = () => {
  return (
    <div className={style.container}>
      <Button type="button" onClick={handleClick}>
        <Image alt="Icon da lua" height={14} width={14} src={"/moon.svg"} />
      </Button>
      <Button>
        <Image alt="Icon do sol" height={14} width={14} src={"/sun.svg"} />
      </Button>
    </div>
  );
};

export default ThemeToglle;
