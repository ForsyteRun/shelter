import {
  buttonLeft,
  buttonLeftStart,
  buttonRight,
  buttonRightEnd,
  buttonNumber,
} from "@/assets/pagination";
import s from "./styles.module.scss";
import { Dispatch, SetStateAction, FC } from "react";

interface IProps {
  setPageNumber: Dispatch<SetStateAction<number>>;
}

const PaginationNavigation: FC<IProps> = ({ setPageNumber }) => {
  const handlePageNumber = (value: "plus" | "minus") => {
    value === "plus"
      ? setPageNumber((prev) => ++prev)
      : setPageNumber((prev) => --prev);
  };

  return (
    <div className={s.container}>
      <img src={buttonLeftStart} alt="buttonLeftStart" />
      <img
        src={buttonLeft}
        alt="buttonLeft"
        onClick={() => handlePageNumber("minus")}
      />
      <img src={buttonNumber} alt="buttonNumber" />

      <img
        src={buttonRight}
        alt="buttonRight"
        onClick={() => handlePageNumber("plus")}
      />
      <img src={buttonRightEnd} alt="buttonRightEnd" />
    </div>
  );
};

export default PaginationNavigation;
