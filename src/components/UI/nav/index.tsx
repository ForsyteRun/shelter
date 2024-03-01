import { headerNavLinks } from "@/db/navLinks";
import cn from "classnames";
import { FC, MouseEvent } from "react";
import s from "./styles.module.scss";

interface IProps {
  open: boolean;
  handleClick: (event: MouseEvent<HTMLElement>) => void;
}

const Nav: FC<IProps> = ({ open, handleClick }) => {
  return (
    <>
      <div className={cn(s.container, { [s.active]: open })}>
        {headerNavLinks.map(({ title, path }) => (
          <a href={path} key={title} onClick={(e) => handleClick(e)}>
            {title}
          </a>
        ))}
      </div>
    </>
  );
};

export default Nav;
