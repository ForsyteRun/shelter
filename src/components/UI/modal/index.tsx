import { vector } from "@/assets/icons";
import { ISliderData } from "@/types/interfaces";
import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  MouseEvent,
  useCallback,
} from "react";
import ModalContent from "./modalContent";
import s from "./styles.module.scss";
import { disableBody } from "@/utils/disableBody";

interface Props {
  data: ISliderData;
  callback: Dispatch<SetStateAction<ISliderData | null>>;
}

const Modal: FC<Props> = ({ data, callback }) => {
  const { path } = data;

  const ref = useRef(null);

  const handleClick = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      const target = event.target as HTMLDivElement;
      const currentTarget = event.currentTarget as HTMLDivElement;

      if (target === ref.current || currentTarget.className.includes("close")) {
        callback(null);
      }
    },
    [callback, ref]
  );

  useEffect(() => {
    disableBody(true);
    return () => {
      disableBody(false);
    };
  }, []);

  return (
    <div ref={ref} onClick={handleClick} className={s.modalContainer}>
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
