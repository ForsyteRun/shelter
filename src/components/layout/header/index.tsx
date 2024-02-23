import { Link } from "react-router-dom";
import s from "./styles.module.scss";
import { Nav } from "@/components/UI";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <Link to="/">Cozy House</Link>
        <span className={s.subLogo}>Shelter for pets in Boston</span>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
