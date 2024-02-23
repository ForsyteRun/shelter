import { useState } from "react";
import { Slider, SliderBtns } from "@/components/UI";
import s from "./styles.module.scss";

const SliderBlock = () => {
  const [slide, setSlide] = useState(0);

  return (
    <div className={s.sliderWrapper}>
      <Slider slide={slide} />
      <SliderBtns setSlide={setSlide} />
    </div>
  );
};

export default SliderBlock;
