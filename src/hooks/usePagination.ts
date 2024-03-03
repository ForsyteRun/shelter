import { sliderData } from "@/db/slider";
import { ISliderData } from "@/types/interfaces";
import { useCallback, useEffect, useState } from "react";

const usePagination = () => {
  const [data, setData] = useState<ISliderData[][] | null>(null);
  const [pageNumber, setPageNumber] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const handlePaginationData = useCallback(() => {
    const modifyData = Array.from({ length: 3 }, () => [...sliderData]).map(
      (shuffledData) => shuffledData.sort(() => Math.random() - 0.5)
    );

    setData(modifyData);
    setPageCount(modifyData.length);
  }, [sliderData]);

  useEffect(() => {
    handlePaginationData();
  }, [sliderData]);

  return { data, pageNumber, pageCount, setPageNumber };
};

export default usePagination;
