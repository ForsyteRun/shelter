import Button from "@/components/UI/button";
import s from "./styles.module.scss";
import { Slider } from "@/components/UI";

const OurFriends = () => {
  return (
    <div className="container">
      <h2 className={s.title}>Our friends who are looking for a house</h2>
      <Slider />
      {/* <Button></Button> */}
    </div>
  );
};

export default OurFriends;
