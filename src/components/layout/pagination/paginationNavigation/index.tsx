import {
  doubleArrowLeft,
  doubleArrowRight,
  singleArrowLeft,
  singleArrowRight,
} from "@/assets/pagination";
import { PaginationNavigationBtn } from "@/components/UI";
import { paginationDirectionEnum } from "@/types/enum";
import { IPaginationProps } from "@/types/interfaces";
import { FC, memo } from "react";
import PaginationPageNumberBtns from "../paginationPageNumberBtns";
import s from "./styles.module.scss";

const PaginationNavigation: FC<IPaginationProps> = memo(
  ({ pageCount, pageNumber, setPageNumber }) => {
    const isDisableLast = pageCount - 1 === pageNumber;
    const isDisableFirst = pageNumber === 0;

    const handlePageNumber = (value: paginationDirectionEnum) => {
      switch (value) {
        case paginationDirectionEnum.PLUS:
          setPageNumber((prev) => ++prev);
          break;
        case paginationDirectionEnum.MINUS:
          setPageNumber((prev) => --prev);
          break;
        case paginationDirectionEnum.START:
          setPageNumber(0);
          break;
        case paginationDirectionEnum.END:
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
          callback={() => handlePageNumber(paginationDirectionEnum.START)}
        />
        <PaginationNavigationBtn
          title={singleArrowLeft}
          disable={isDisableFirst}
          callback={() => handlePageNumber(paginationDirectionEnum.MINUS)}
        />

        <PaginationPageNumberBtns
          pageCount={pageCount}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />

        <PaginationNavigationBtn
          title={singleArrowRight}
          disable={isDisableLast}
          callback={() => handlePageNumber(paginationDirectionEnum.PLUS)}
        />
        <PaginationNavigationBtn
          title={doubleArrowRight}
          disable={isDisableLast}
          callback={() => handlePageNumber(paginationDirectionEnum.END)}
        />
      </div>
    );
  }
);

export default PaginationNavigation;
