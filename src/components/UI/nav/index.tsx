import { headerNavLinks } from "@/db/navLinks";
import cn from "classnames";
import { FC } from "react";
import s from "./styles.module.scss";

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
