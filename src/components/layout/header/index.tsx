import { Nav } from "@/components/UI";
import { BurgerIcon, BurgerMenu } from "@/components/UI/burger";
import cn from "classnames";
import { FC, MouseEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import s from "./styles.module.scss";

interface Props {
  open: boolean;
  handleClick: (event: MouseEvent<HTMLElement>) => void;
}

const Header: FC<Props> = ({ open, handleClick }) => {
  const location = useLocation();

  const isRootLocation = location.pathname === "/";

  return (
    <header
      className={cn({
        headerBackground: isRootLocation,
      })}
    >
      <div className={cn("container", s.header)}>
        <div className={s.logo}>
          <Link to="/">Cozy House</Link>
          <span
            className={cn(s.subLogo, {
              lightColor: isRootLocation,
            })}
          >
            Shelter for pets in Boston
          </span>
        </div>
        <Nav open={open} handleClick={handleClick} />
        <BurgerIcon open={open} handleClick={handleClick} />
        <BurgerMenu open={open} handleClick={handleClick} />
      </div>
    </header>
  );
};

export default Header;
