import { Nav } from "@/components/UI";
import { FC, MouseEvent } from "react";
import { Link } from "react-router-dom";
import s from "./styles.module.scss";
import cn from "classnames";
import { BurgerIcon, BurgerMenu } from "@/components/UI/burger";

interface Props {
  open: boolean;
  handleClick: (event: MouseEvent<HTMLElement>) => void;
}

const Header: FC<Props> = ({ open, handleClick }) => {
  return (
    <header className="headerBackground">
      <div className={cn("container", s.header)}>
        <div className={s.logo}>
          <Link to="/">Cozy House</Link>
          <span className={s.subLogo}>Shelter for pets in Boston</span>
        </div>
        <Nav open={open} handleClick={handleClick} />
        <BurgerIcon open={open} handleClick={handleClick} />
        <BurgerMenu open={open} handleClick={handleClick} />
      </div>
    </header>
  );
};

export default Header;
