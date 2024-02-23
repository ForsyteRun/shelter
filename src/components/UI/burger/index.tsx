import cn from "classnames";
import { FC } from "react";
import s from "./styles.module.scss";

interface PropsType {
  handleClick: (value: boolean) => void;
  open: boolean;
}

const Burger: FC<PropsType> = ({ handleClick, open }) => {
  return (
    <>
      <div
        className={cn(s.container, { [s.active]: open })}
        onClick={() => handleClick(!open)}
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
