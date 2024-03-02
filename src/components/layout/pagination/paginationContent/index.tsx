import { Modal } from "@/components/UI";
import { sliderData } from "@/db/slider";
import useDelayMount from "@/hooks/useDelayMount";
import { ISliderData } from "@/types/interfaces";
import "keen-slider/keen-slider.min.css";
import { useCallback, useEffect, useState } from "react";
import { Card } from "../..";
import PaginationNavigation from "../paginationNavigation";
import s from "./styles.module.scss";

const PaginationContent = () => {
  const { modalData, isOpen, setModalData } = useDelayMount();
  const [data, setData] = useState<ISliderData[]>([]);

  const handlePaginationData = useCallback(() => {
    const modifyData = Array.from({ length: 3 }, () => [...sliderData]).flatMap(
      (shuffledData) => shuffledData.sort(() => Math.random() - 0.5)
    );

    setData(modifyData);
  }, [sliderData]);

  useEffect(() => {
    handlePaginationData();
  }, []);

  return (
    <>
      <div className={s.cardsContainer}>
        {data.slice(0, 8).map((data: ISliderData, index) => (
          <Card data={data} styles="" callback={setModalData} key={index} />
        ))}
      </div>
      <PaginationNavigation />
      {modalData && (
        <Modal data={modalData} isOpen={isOpen} callback={setModalData} />
      )}
    </>
  );
};

export default PaginationContent;
