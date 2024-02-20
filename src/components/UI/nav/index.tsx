import { headerNavLinks } from "@/db/navLinks";
import { Link } from "react-router-dom";
import s from "./styles.module.scss";

const Nav = () => {
  return (
    <div className={s.container}>
      {headerNavLinks.map(({ title, path }) => (
        <Link to={path} key={title}>
          {title}
        </Link>
      ))}
    </div>
  );
};

export default Nav;
