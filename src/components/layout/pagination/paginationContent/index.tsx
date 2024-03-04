import { Modal } from "@/components/UI";
import { usePagination, useResize } from "@/hooks";
import useDelayMount from "@/hooks/useDelayMount";
import { ISliderData } from "@/types/interfaces";
import { Card } from "../..";
import PaginationNavigation from "../paginationNavigation";
import s from "./styles.module.scss";
import { useEffect } from "react";
import { documentSizeEnum } from "@/types/enum";

const PaginationContent = () => {
  const { modalData, isOpen, setModalData } = useDelayMount();
  const { size } = useResize();
  const { data, pageNumber, pageCount, setPageNumber, setPageData } =
    usePagination();
  const { innerWidth: width } = window;

  useEffect(() => {
    setPageNumber(0);
    if (width >= documentSizeEnum.TABLET) {
      setPageData({ cardsPerPage: 8, pageCount: 3 });
    } else if (
      width > documentSizeEnum.MOBILE &&
      width < documentSizeEnum.TABLET
    ) {
      setPageData({ cardsPerPage: 6, pageCount: 4 });
    } else {
      setPageData({ cardsPerPage: 3, pageCount: 8 });
    }
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
