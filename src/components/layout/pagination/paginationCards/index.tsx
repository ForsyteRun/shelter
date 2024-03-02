import { Modal } from "@/components/UI";
import { sliderData } from "@/db/slider";
import useDelayMount from "@/hooks/useDelayMount";
import { ISliderData } from "@/types/interfaces";
import "keen-slider/keen-slider.min.css";
import { Card } from "../..";
import s from "./styles.module.scss";

const PaginationCards = () => {
  const { modalData, isOpen, setModalData } = useDelayMount();

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
