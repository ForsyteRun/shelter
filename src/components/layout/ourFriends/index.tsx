import Button from "@/components/UI/button";
import s from "./styles.module.scss";
import { Slider } from "@/components/UI";
import cn from "classnames";

const OurFriends = () => {
  return (
    <div className={s.wrapper}>
      <div className={cn("container", s.container)}>
        <h2 className={s.title}>
          Our friends who
          <span>are looking for a house</span>
        </h2>
        <div className={s.sliderWrapper}>
          <Slider />
        </div>
        {/* <Button></Button> */}
      </div>
    </div>
  );
};

export default OurFriends;
