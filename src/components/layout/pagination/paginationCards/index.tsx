import { Modal } from "@/components/UI";
import { sliderData } from "@/db/slider";
import useDelayMount from "@/hooks/useDelayMount";
import { ISliderData } from "@/types/interfaces";
import "keen-slider/keen-slider.min.css";
import { Card } from "../..";
import s from "./styles.module.scss";
import { useEffect, useCallback } from "react";

const PaginationCards = () => {
  const { modalData, isOpen, setModalData } = useDelayMount();
  let modifyData: ISliderData[] = [];

  const handlePaginationData = useCallback(() => {
    const data = Array(3).fill(sliderData).flat();
    modifyData = [...modifyData, ...data];
  }, [sliderData]);

  useEffect(() => {
    handlePaginationData();
  }, []);

  return (
    <>
      <div className={s.cardsContainer}>
        {sliderData.map((data: ISliderData) => (
          <Card
            data={data}
            styles=""
            callback={setModalData}
            key={data.title}
          />
        ))}
      </div>
      {modalData && (
        <Modal data={modalData} isOpen={isOpen} callback={setModalData} />
      )}
    </>
  );
};

export default PaginationCards;
