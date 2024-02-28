import useDelayMount from "@/hooks/useDelayMount";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { FC, useEffect, useState } from "react";
import { Modal } from "..";
import SliderCards from "./sliderCards";

interface IProps {
  slide: number;
}

const Slider: FC<IProps> = ({ slide }) => {
  const [moveSlide, setMoveSlide] = useState(slide);
  const { modalData, isOpen, setModalData } = useDelayMount();

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
    <>
      <SliderCards
        ref={ref}
        modalData={modalData}
        setModalData={setModalData}
      />
      {modalData && (
        <Modal data={modalData} isOpen={isOpen} callback={setModalData} />
      )}
    </>
  );
};

export default Slider;
