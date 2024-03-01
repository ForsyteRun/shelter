import { headerNavLinks } from "@/db/navLinks";
import cn from "classnames";
import { FC, MouseEvent } from "react";
import s from "./styles.module.scss";
import { useLocation } from "react-router-dom";

interface IProps {
  open: boolean;
  handleClick: (event: MouseEvent<HTMLElement>) => void;
}

const Nav: FC<IProps> = ({ open, handleClick }) => {
  const location = useLocation();

  const isRootLocation = location.pathname === "/";

  return (
    <>
      <div className={cn(s.container, { [s.active]: open })}>
        {headerNavLinks.map(({ title, path }) => (
          <a
            href={path}
            key={title}
            onClick={(e) => handleClick(e)}
            className={cn({
              lightColor: isRootLocation,
              [s.darkColor]: !isRootLocation,
            })}
          >
            {title}
          </a>
        ))}
      </div>
    </>
  );
};

export default Nav;
