import { Modal } from "@/components/UI";
import { usePagination, useResize } from "@/hooks";
import useDelayMount from "@/hooks/useDelayMount";
import { ISliderData } from "@/types/interfaces";
import { useEffect } from "react";
import { Card } from "../..";
import PaginationNavigation from "../paginationNavigation";
import s from "./styles.module.scss";

const PaginationContent = () => {
  const { modalData, isOpen, setModalData } = useDelayMount();
  const { size, sizeData } = useResize();
  const { data, pageNumber, pageCount, setPageNumber, setPageData } =
    usePagination();

  useEffect(() => {
    setPageData(sizeData);
  }, [size]);

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
