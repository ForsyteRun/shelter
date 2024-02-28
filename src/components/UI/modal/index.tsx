import { vector } from "@/assets/icons";
import { ISliderData } from "@/types/interfaces";
import { Dispatch, FC, SetStateAction, useEffect } from "react";
import ModalContent from "./modalContent";
import s from "./styles.module.scss";
import { disableBody } from "@/utils/disableBody";

interface Props {
  data: ISliderData;
  callback: Dispatch<SetStateAction<ISliderData | null>>;
}

const Modal: FC<Props> = ({ data, callback }) => {
  const { path } = data;

  const handleClick = () => {
    callback(null);
  };

  useEffect(() => {
    disableBody(true);
    return () => {
      disableBody(false);
    };
  }, []);

  return (
    <div className={s.modalContainer}>
      <div className={s.modalContent}>
        <div className={s.body}>
          <img src={path} alt="pet-modal" />
          <ModalContent data={data} />
        </div>
        <div className={s.close} onClick={handleClick}>
          <img src={vector} alt="close-modal" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
