import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import s from "./styles.module.scss";
import cn from "classnames";
import { sliderData } from "@/db/slider";
import { Card } from "@/components/layout";

const Slider = () => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
  });
  return (
    <div className={s.sliderWrapper}>
      <div ref={ref} className={cn("keen-slider", s.container)}>
        {sliderData.map(({ path, title }) => (
          <Card
            path={path}
            title={title}
            key={title}
            styles="keen-slider__slide"
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
