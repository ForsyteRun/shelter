import { Burger, Nav } from "@/components/UI";
import { FC, MouseEvent } from "react";
import { Link } from "react-router-dom";
import s from "./styles.module.scss";

interface Props {
  open: boolean;
  handleClick: (event: MouseEvent<HTMLDivElement>) => void;
}

const Header: FC<Props> = ({ open, handleClick }) => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <Link to="/">Cozy House</Link>
        <span className={s.subLogo}>Shelter for pets in Boston</span>
      </div>
      <Nav open={open} />
      <Burger handleClick={handleClick} open={open} />
    </header>
  );
};

export default Header;
