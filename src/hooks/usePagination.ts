import { sliderData } from "@/db/slider";
import { ISliderData } from "@/types/interfaces";
import { useEffect, useState } from "react";
import { IPageData } from "./types";

const usePagination = () => {
  const [data, setData] = useState<ISliderData[][] | null>(null);
  const [pageNumber, setPageNumber] = useState(0);

  const [pageData, setPageData] = useState<IPageData>({
    cardsPerPage: 8,
    pageCount: 3,
  });

  const { pageCount, cardsPerPage } = pageData;

  const handlePaginationData = () => {
    const modifyData = Array.from({ length: pageCount }, () => [
      ...sliderData,
    ]).map((shuffledData) =>
      shuffledData.sort(() => Math.random() - 0.5).slice(0, cardsPerPage)
    );

    setPageNumber(0);
    setData(modifyData);
  };

  useEffect(() => {
    handlePaginationData();
  }, [pageData]);

  return { data, pageNumber, pageCount, setPageNumber, setPageData };
};

export default usePagination;
