import { useState } from "react";
import { Slider } from "@/components/UI";
import s from "./styles.module.scss";
import SliderNavigation from "@/components/UI/slider/sliderNavigation";

const SliderBlock = () => {
  const [slide, setSlide] = useState(0);

  return (
    <div className={s.sliderWrapper}>
      <Slider slide={slide} />
      <SliderNavigation setSlide={setSlide} />
    </div>
  );
};

export default SliderBlock;
