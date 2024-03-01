import cn from "classnames";
import { FC, MouseEvent } from "react";
import s from "./styles.module.scss";

interface PropsType {
  handleClick: (event: MouseEvent<HTMLDivElement>) => void;
  open: boolean;
}

const BurgerMenu: FC<PropsType> = ({ handleClick, open }) => {
  return (
    <div className={cn({ [s.active]: open })} onClick={handleClick}>
      <div className={s.menu}></div>
    </div>
  );
};

export default BurgerMenu;
