import { headerNavLinks } from "@/db/navLinks";
import { Link } from "react-router-dom";
import s from "./styles.module.scss";
import { useCallback, useState } from "react";
import cn from "classnames";
import { Burger } from "@/components/UI";
import { FC } from "react";

interface IProps {
  open: boolean;
}

const Nav: FC<IProps> = ({ open }) => {
  return (
    <>
      <div className={cn(s.container, { [s.active]: open })}>
        {headerNavLinks.map(({ title, path }) => (
          <a href={path} key={title}>
            {title}
          </a>
        ))}
      </div>
    </>
  );
};

export default Nav;
