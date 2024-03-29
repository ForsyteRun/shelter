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
        <div style={{ maxWidth: "77%" }}>
          <Slider />
        </div>
        <Button
          title="Get to know the rest"
          styles={cn("button", s.button)}
        ></Button>
      </div>
    </div>
  );
};

export default OurFriends;
