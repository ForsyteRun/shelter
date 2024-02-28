import { Card } from "@/components/layout";
import { sliderData } from "@/db/slider";
import { ISliderData } from "@/types/interfaces";
import cn from "classnames";
import { Dispatch, forwardRef, SetStateAction } from "react";
import s from "./styles.module.scss";

interface Props {
  modalData: ISliderData | null;
  setModalData: Dispatch<SetStateAction<ISliderData | null>>;
}

const SliderCards = forwardRef<HTMLDivElement, Props>(
  ({ modalData, setModalData }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("keen-slider", { [s.disable]: !!modalData })}
      >
        {sliderData.map((data: ISliderData) => (
          <Card
            data={data}
            styles="keen-slider__slide"
            callback={setModalData}
            key={data.title}
          />
        ))}
      </div>
    );
  }
);

export default SliderCards;
