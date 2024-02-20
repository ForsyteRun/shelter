import { Link } from "react-router-dom";
import s from "./styles.module.scss";

const Header = () => {
  return (
    <header className={s.container}>
      <Link to="/" className={s.logo}>
        <span>Cozy House</span>
      </Link>
    </header>
  );
};

export default Header;
