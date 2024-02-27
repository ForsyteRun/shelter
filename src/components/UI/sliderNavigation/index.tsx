import { FC } from "react";
import s from "./styles.module.scss";
import { sliderMoveEnum } from "@/types/enum";

interface IProps {
  setSlide: React.Dispatch<React.SetStateAction<number>>;
}

const SliderNavigation: FC<IProps> = ({ setSlide }) => {
  const handleClick = (value: sliderMoveEnum) => {
    value === "next" ? setSlide((prev) => ++prev) : setSlide((prev) => --prev);
  };

  return (
    <>
      <button
        className={s.buttonLeft}
        onClick={() => handleClick(sliderMoveEnum.PREV)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="28"
          viewBox="2 0 24 20"
        >
          <path
            d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
            fill="#292929"
          />
        </svg>
      </button>
      <button
        className={s.buttonRight}
        onClick={() => handleClick(sliderMoveEnum.NEXT)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="28"
          viewBox="-2 0  24 20"
        >
          <path
            d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"
            fill="#292929"
          />
        </svg>
      </button>
    </>
  );
};

export default SliderNavigation;
