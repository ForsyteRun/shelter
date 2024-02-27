import { FC, useEffect, useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { sliderData } from "@/db/slider";
import { Card } from "@/components/layout";
import { ISliderData } from "@/types/interfaces";
import { Modal } from "..";

interface IProps {
  slide: number;
}

const Slider: FC<IProps> = ({ slide }) => {
  const [moveSlide, setMoveSlide] = useState(slide);
  const [isModal, setIsModal] = useState(false);

  const [ref, slider] = useKeenSlider<HTMLDivElement>({
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

  useEffect(() => {
    if (moveSlide > slide) {
      slider.current?.next();
    } else {
      slider.current?.prev();
    }

    setMoveSlide(slide);
  }, [slide]);

  return (
    <div ref={ref} className="keen-slider">
      {sliderData.map(({ path, title, type, disc, info }: ISliderData) => (
        <>
          <Card
            path={path}
            title={title}
            type={type}
            disc={disc}
            info={info}
            styles="keen-slider__slide"
            callback={setIsModal}
            isModal={isModal}
            key={title}
          />
          {isModal && (
            <Modal title={title} type={type} disc={disc} info={info} />
          )}
        </>
      ))}
    </div>
  );
};

export default Slider;
