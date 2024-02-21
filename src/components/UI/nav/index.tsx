import { headerNavLinks } from "@/db/navLinks";
import { Link } from "react-router-dom";
import s from "./styles.module.scss";
import Burger from "../burger";

const Nav = () => {
  return (
    <>
      <div className={s.container}>
        {headerNavLinks.map(({ title, path }) => (
          <Link to={path} key={title}>
            {title}
          </Link>
        ))}
      </div>
      <Burger />
    </>
  );
};

export default Nav;
