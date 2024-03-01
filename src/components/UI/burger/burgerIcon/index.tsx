import cn from "classnames";
import { FC, MouseEvent } from "react";
import s from "./styles.module.scss";

interface PropsType {
  handleClick: (event: MouseEvent<HTMLDivElement>) => void;
  open: boolean;
}

const BurgerIcon: FC<PropsType> = ({ open, handleClick }) => {
  console.log(open);

  return (
    <div
      className={cn([s.burgerIcon], {
        [s.active]: open,
      })}
      onClick={(e) => handleClick(e)}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BurgerIcon;
