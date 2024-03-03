import {
  doubleArrowLeft,
  doubleArrowRight,
  singleArrowLeft,
  singleArrowRight,
} from "@/assets/pagination";
import { PaginationNavigationBtn } from "@/components/UI";
import { paginationDirection } from "@/types/enum";
import { Dispatch, FC, SetStateAction, memo } from "react";
import PaginationPageNumberBtns from "../paginationPageNumberBtns";
import s from "./styles.module.scss";

interface IProps {
  pageCount: number;
  pageNumber: number;
  setPageNumber: Dispatch<SetStateAction<number>>;
}

const PaginationNavigation: FC<IProps> = memo(
  ({ pageCount, pageNumber, setPageNumber }) => {
    const isDisableLast = pageCount - 1 === pageNumber;
    const isDisableFirst = pageNumber === 0;

    const handlePageNumber = (value: paginationDirection) => {
      switch (value) {
        case paginationDirection.PLUS:
          setPageNumber((prev) => ++prev);
          break;
        case paginationDirection.MINUS:
          setPageNumber((prev) => --prev);
          break;
        case paginationDirection.START:
          setPageNumber(0);
          break;
        case paginationDirection.END:
          setPageNumber(pageCount - 1);
          break;

        default:
          break;
      }
    };

    return (
      <div className={s.container}>
        <PaginationNavigationBtn
          title={doubleArrowLeft}
          disable={isDisableFirst}
          callback={() => handlePageNumber(paginationDirection.START)}
        />
        <PaginationNavigationBtn
          title={singleArrowLeft}
          disable={isDisableFirst}
          callback={() => handlePageNumber(paginationDirection.MINUS)}
        />

        <PaginationPageNumberBtns
          pageCount={pageCount}
          pageNumber={pageNumber}
        />

        <PaginationNavigationBtn
          title={singleArrowRight}
          disable={isDisableLast}
          callback={() => handlePageNumber(paginationDirection.PLUS)}
        />
        <PaginationNavigationBtn
          title={doubleArrowRight}
          disable={isDisableLast}
          callback={() => handlePageNumber(paginationDirection.END)}
        />
      </div>
    );
  }
);

export default PaginationNavigation;
