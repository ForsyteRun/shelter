import { ISliderData } from "@/types/interfaces";
import { useEffect, useState } from "react";

const useDelayMount = (delayTime = 300) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isClose, setIsClose] = useState(false);
  const [modalData, setModalData] = useState<ISliderData | null>(null);

  useEffect(() => {
    let timeoutId: number;

    if (modalData) {
      timeoutId = setTimeout(() => setIsOpen(true), delayTime);
    } else {
      setIsOpen(false);
    }

    return () => clearTimeout(timeoutId);
  }, [modalData]);

  // useEffect(() => {
  //   // let timeoutId: number;
  //   // if (!isOpen) {
  //   //   timeoutId = setTimeout(() => setModalData(null), delayTime);
  //   // }
  //   // return () => clearTimeout(timeoutId);
  // }, [isOpen]);

  return { isOpen, modalData, setModalData, setIsOpen };
};

export default useDelayMount;
