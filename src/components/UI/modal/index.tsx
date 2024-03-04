import { vector } from "@/assets/icons";
import { useScrollbarWidth } from "@/hooks";
import { ISliderData } from "@/types/interfaces";
import { disableBody } from "@/utils/disableBody";
import cn from "classnames";
import {
  Dispatch,
  FC,
  MouseEvent,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
} from "react";
import ModalContent from "./modalContent";
import s from "./styles.module.scss";

interface Props {
  data: ISliderData;
  isOpen: boolean;
  callback: Dispatch<SetStateAction<ISliderData | null>>;
}

const Modal: FC<Props> = ({ data, isOpen, callback }) => {
  const ref = useRef(null);

  const scrollbarWidth = useScrollbarWidth();
  const { path } = data;

  useEffect(() => {
    document.body.style.paddingRight = `${scrollbarWidth}` + "px";
    document.body.style.paddingBottom = `${scrollbarWidth}` + "px";

    return () => {
      document.body.style.paddingRight = "0";
      document.body.style.paddingBottom = "0";
    };
  }, []);

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
      <div
        className={cn(s.modalContent, {
          // [s.unMmount]: !isOpen,
          [s.mount]: isOpen,
        })}
      >
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
