import { useState } from "react";
import s from "./styles.module.scss";
import cn from "classnames";

const Burger = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div
        className={cn(s.container, { [s.active]: open })}
        onClick={handleClick}
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
