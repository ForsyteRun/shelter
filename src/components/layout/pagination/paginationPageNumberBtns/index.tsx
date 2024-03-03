import { PaginationNavigationBtn } from "@/components/UI";
import { Fragment, FC } from "react";

interface IProps {
  pageCount: number;
}
const PaginationPageNumberBtns: FC<IProps> = ({ pageCount }) => {
  return (
    <>
      {Array.from({ length: pageCount }).map((_, index) => (
        <Fragment key={index}>
          <PaginationNavigationBtn title={index} />
        </Fragment>
      ))}
    </>
  );
};

export default PaginationPageNumberBtns;
