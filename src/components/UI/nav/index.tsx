import { headerNavLinks } from "@/db/navLinks";
import { Link } from "react-router-dom";
import s from "./styles.module.scss";
import { useCallback, useState } from "react";
import cn from "classnames";
import Burger from "@/components/UI/burger";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const handleClick = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <>
      <div className={cn(s.container, { [s.active]: open })}>
        {headerNavLinks.map(({ title, path }) => (
          <Link to={path} key={title}>
            {title}
          </Link>
        ))}
      </div>
      <Burger handleClick={handleClick} open={open} />
    </>
  );
};

export default Nav;
