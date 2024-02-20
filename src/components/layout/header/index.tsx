import { Link } from "react-router-dom";
import s from "./styles.module.scss";

const Header = () => {
  return (
    <header className={s.container}>
      <Link to="/">Cozydfg House</Link>
    </header>
  );
};

export default Header;
