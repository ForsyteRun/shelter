import { sliderData } from "@/db/slider";
import { ISliderData } from "@/types/interfaces";
import { useCallback, useEffect, useState } from "react";

const usePagination = () => {
  const [data, setData] = useState<ISliderData[][] | null>(null);
  const [pageNumber, setPageNumber] = useState(0);

  const handlePaginationData = useCallback(() => {
    const modifyData = Array.from({ length: 3 }, () => [...sliderData]).map(
      (shuffledData) => shuffledData.sort(() => Math.random() - 0.5)
    );

    setData(modifyData);
  }, [sliderData]);

  useEffect(() => {
    handlePaginationData();
  }, []);

  return { data, pageNumber, setPageNumber };
};

export default usePagination;
