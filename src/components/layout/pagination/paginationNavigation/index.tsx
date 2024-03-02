import {
  buttonLeft,
  buttonLeftStart,
  buttonRight,
  buttonRightEnd,
  buttonNumber,
} from "@/assets/pagination";
import s from "./styles.module.scss";

const PaginationNavigation = () => {
  return (
    <div className={s.container}>
      <img src={buttonLeftStart} alt="buttonLeftStart" />
      <img src={buttonLeft} alt="buttonLeft" />
      <img src={buttonNumber} alt="buttonNumber" />
      <img src={buttonRight} alt="buttonRight" />
      <img src={buttonRightEnd} alt="buttonRightEnd" />
    </div>
  );
};

export default PaginationNavigation;
