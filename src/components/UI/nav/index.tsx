import { headerNavLinks } from "@/db/navLinks";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      {headerNavLinks.map(({ title, path }) => (
        <Link to={path} key={title}>
          {title}
        </Link>
      ))}
    </div>
  );
};

export default Nav;
