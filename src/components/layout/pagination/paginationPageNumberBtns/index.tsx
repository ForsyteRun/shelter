import { PaginationNavigationBtn } from "@/components/UI";
import { useResize } from "@/hooks";
import { documentSizeEnum } from "@/types/enum";
import { Dispatch, FC, Fragment, SetStateAction } from "react";

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
  const { size } = useResize();

  const isMobile = size === documentSizeEnum.MOBILE;

  return (
    <>
      {isMobile ? (
        <PaginationNavigationBtn title={pageNumber + 1} isSelected={true} />
      ) : (
        Array.from({ length: pageCount }).map((_, index) => (
          <Fragment key={index}>
            <PaginationNavigationBtn
              title={index + 1}
              isSelected={pageNumber === index}
              callback={() => setPageNumber(index)}
            />
          </Fragment>
        ))
      )}
    </>
  );
};

export default PaginationPageNumberBtns;
