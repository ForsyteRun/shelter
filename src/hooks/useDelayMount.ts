import { ISliderData } from "@/types/interfaces";
import { useEffect, useState } from "react";

const useDelayMount = (delayTime = 300) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState<ISliderData | null>(null);

  useEffect(() => {
    let timeoutId: number;

    if (modalData && !isOpen) {
      timeoutId = setTimeout(() => setIsOpen(true), delayTime);
    } else if (!modalData && isOpen) {
      timeoutId = setTimeout(() => setIsOpen(false), delayTime);
      timeoutId = setTimeout(() => setIsOpen(false), delayTime);
    }
    return () => clearTimeout(timeoutId);
  }, [modalData, delayTime, isOpen]);

  return { isOpen, modalData, setModalData };
};

export default useDelayMount;
