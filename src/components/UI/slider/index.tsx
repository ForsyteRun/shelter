import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import cn from "classnames";
import { sliderData } from "@/db/slider";
import { Card } from "@/components/layout";
import s from "./styles.module.scss";

const Slider = () => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      "(min-width: 1180px)": {
        slides: { perView: 3, spacing: 90 },
      },
      "( max-width: 1180px)": {
        slides: { perView: 2, spacing: 30 },
      },
      "(max-width: 730px)": {
        slides: { perView: 1, spacing: 90 },
      },
    },
    loop: true,
  });
  return (
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
  );
};

export default Slider;
