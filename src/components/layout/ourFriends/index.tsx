import Button from "@/components/UI/button";
import cn from "classnames";
import { SliderBlock } from "..";
import s from "./styles.module.scss";
import { Link } from "react-router-dom";
import { pathEnum } from "@/types/enum";

const OurFriends = () => {
  return (
    <div className={cn("container", s.container)} id="pets">
      <h2 className={s.title}>
        Our friends who
        <span>are looking for a house</span>
      </h2>
      <SliderBlock />
      <Link to={pathEnum.FRIIENDS} className={s.linkButton}>
        <Button title="Get to know the rest" styles={cn("button", s.button)} />
      </Link>
    </div>
  );
};

export default OurFriends;
