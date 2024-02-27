import { ISliderData } from "@/types/interfaces";
import { FC, Dispatch, SetStateAction } from "react";
import s from "./styles.module.scss";
import { vector } from "@/assets/icons";

interface Props {
  data: ISliderData;
  callback: Dispatch<SetStateAction<ISliderData | null>>;
}

const Modal: FC<Props> = ({ data, callback }) => {
  const { title, disc, info, path, type } = data;

  const handleClick = () => {
    callback(null);
  };

  return (
    <div className={s.modalContainer}>
      <div className={s.modalContent}>
        {disc}
        <div className={s.body}>
          <img src={path} alt="pet-modal" />
        </div>
        <img
          src={vector}
          alt="close-modal"
          className={s.close}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Modal;
