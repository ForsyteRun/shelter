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
        <div className={s.body}>
          <img src={path} alt="pet-modal" />
          <div className={s.bodyContent}>
            <h2>{title}</h2>
            <h3>{type}</h3>
            <h4>{disc}</h4>
            <ul>
              {Object.entries(info).map(([key, value]) => (
                <li key={key} className={s.list}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={s.close} onClick={handleClick}>
          <img src={vector} alt="close-modal" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
