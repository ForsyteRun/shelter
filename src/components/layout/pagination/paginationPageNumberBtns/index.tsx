import { PaginationNavigationBtn } from "@/components/UI";
import { Fragment, FC } from "react";

interface IProps {
  pageCount: number;
  pageNumber: number;
}
const PaginationPageNumberBtns: FC<IProps> = ({ pageCount, pageNumber }) => {
  return (
    <>
      {Array.from({ length: pageCount }).map((_, index) => (
        <Fragment key={index}>
          <PaginationNavigationBtn
            title={index + 1}
            isSelected={pageNumber === index}
          />
        </Fragment>
      ))}
    </>
  );
};

export default PaginationPageNumberBtns;
