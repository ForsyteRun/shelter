import { PaginationNavigationBtn } from "@/components/UI";
import { Fragment, FC, Dispatch, SetStateAction } from "react";

interface IProps {
  pageCount: number;
  pageNumber: number;
  setPageNumber: Dispatch<SetStateAction<number>>;
}

const PaginationPageNumberBtns: FC<IProps> = ({
  pageCount,
  pageNumber,
  setPageNumber,
}) => {
  return (
    <>
      {Array.from({ length: pageCount }).map((_, index) => (
        <Fragment key={index}>
          <PaginationNavigationBtn
            title={index + 1}
            isSelected={pageNumber === index}
            callback={() => setPageNumber(index)}
          />
        </Fragment>
      ))}
    </>
  );
};

export default PaginationPageNumberBtns;
