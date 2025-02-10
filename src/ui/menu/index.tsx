import Link from "next/link";
import React from "react";
import styles from "./menu.module.scss";
import Button from "../button";

const pages = [
  {
    id: 0,
    text: "Lorem 1",
    Link: "#",
  },
  {
    id: 1,
    text: "Lorem 2",
    Link: "#",
  },
  {
    id: 2,
    text: "Lorem 3",
    Link: "#",
  },
  {
    id: 3,
    text: "Lorem 4",
    Link: "#",
  },
];

const Menu = () => {
  return (
    <div className={styles.containerMenu}>
      <h1>Vini SoundStream </h1>
      <div>
        {pages.map((page) => (
          <Button key={page.id}>
            <Link href={page.Link}>{page.text}</Link>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Menu;
