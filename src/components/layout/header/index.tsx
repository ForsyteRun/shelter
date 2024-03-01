import { Nav } from "@/components/UI";
import { FC, MouseEvent } from "react";
import { Link } from "react-router-dom";
import s from "./styles.module.scss";
import { BurgerIcon, BurgerMenu } from "@/components/UI/burger";

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
      <BurgerIcon handleClick={handleClick} open={open} />
      <BurgerMenu handleClick={handleClick} open={open} />
    </header>
  );
};

export default Header;
