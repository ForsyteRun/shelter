import cn from "classnames";
import { FC, MouseEvent } from "react";
import s from "./styles.module.scss";

interface PropsType {
  handleClick: (event: MouseEvent<HTMLDivElement>) => void;
  open: boolean;
}

const Burger: FC<PropsType> = ({ handleClick, open }) => {
  return (
    <>
      <div
        className={cn(s.burgerContainer, { [s.active]: open })}
        onClick={(e) => handleClick(e)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={cn(s.menu, { [s.active]: open })}></div>
    </>
  );
};

export default Burger;
