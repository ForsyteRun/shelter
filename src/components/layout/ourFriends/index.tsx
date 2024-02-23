import Button from "@/components/UI/button";
import cn from "classnames";
import { SliderBlock } from "..";
import s from "./styles.module.scss";

const OurFriends = () => {
  return (
    <div className={s.wrapper}>
      <div className={cn("container", s.container)}>
        <h2 className={s.title}>
          Our friends who
          <span>are looking for a house</span>
        </h2>
        <SliderBlock />
        <Button
          title="Get to know the rest"
          styles={cn("button", s.button)}
        ></Button>
      </div>
    </div>
  );
};

export default OurFriends;
