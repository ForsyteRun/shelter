import cn from "classnames";
import { FC, MouseEvent } from "react";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import s from "./styles.module.scss";
import createNavLink from "@/utils/createNavLinks";

interface IProps {
  open: boolean;
  handleClick: (event: MouseEvent<HTMLElement>) => void;
}

const Nav: FC<IProps> = ({ open, handleClick }) => {
  const location = useLocation();

  const isMainPage = location.pathname === "/";

  return (
    <>
      <div className={cn(s.container, { [s.active]: open })}>
        {createNavLink().map(({ title, path }) => (
          <HashLink
            to={isMainPage ? path : `/${path}`}
            key={title}
            onClick={(e) => handleClick(e)}
            className={cn({
              lightColor: isMainPage,
              [s.darkColor]: !isMainPage,
            })}
          >
            {title}
          </HashLink>
        ))}
      </div>
    </>
  );
};

export default Nav;
