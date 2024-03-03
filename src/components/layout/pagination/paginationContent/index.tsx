import { Modal } from "@/components/UI";
import { usePagination } from "@/hooks";
import useDelayMount from "@/hooks/useDelayMount";
import { ISliderData } from "@/types/interfaces";
import { Card } from "../..";
import PaginationNavigation from "../paginationNavigation";
import s from "./styles.module.scss";

const PaginationContent = () => {
  const { modalData, isOpen, setModalData } = useDelayMount();
  const { data, pageNumber, pageCount, setPageNumber } = usePagination();

  return (
    <>
      <div className={s.cardsContainer}>
        {data &&
          data[pageNumber].map((data: ISliderData, index) => (
            <Card data={data} styles="" callback={setModalData} key={index} />
          ))}
      </div>
      <PaginationNavigation
        pageCount={pageCount}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
      {modalData && (
        <Modal data={modalData} isOpen={isOpen} callback={setModalData} />
      )}
    </>
  );
};

export default PaginationContent;
