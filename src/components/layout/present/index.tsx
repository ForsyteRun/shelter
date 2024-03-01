import Button from "@/components/UI/button";
import s from "./styles.module.scss";
import puppy from "@/assets/start-screen-puppy.png";
import cn from "classnames";
import { Link } from "react-router-dom";
import { pathEnum } from "@/types/enum";

const Present = () => {
  return (
    <section className={cn("container", s.container)}>
      <div className={s.content}>
        <h1>
          Not only people <span>need a house</span>
        </h1>
        <p>
          We offer to give a chance to a little and nice puppy with an extremely
          wide and open heart. He or she will love you more than anybody else in
          the world, you will see!
        </p>
        <Link to={pathEnum.FRIIENDS}>
          <Button title="Make a friend" styles={cn("button", s.button)} />
        </Link>
      </div>
      <div className={s.imgWrapper}>
        <img src={puppy} alt="dog" />
      </div>
    </section>
  );
};

export default Present;
