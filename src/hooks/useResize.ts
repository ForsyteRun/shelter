import { documentSizeEnum } from "@/types/enum";
import { useEffect, useState } from "react";
import { IPageData } from "./types";

const useResize = () => {
  const [size, setSize] = useState<documentSizeEnum>(documentSizeEnum.DESKTOP);
  const [sizeData, setSizeData] = useState<IPageData>({
    cardsPerPage: 8,
    pageCount: 3,
  });

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;

      if (innerWidth >= documentSizeEnum.TABLET) {
        setSize(documentSizeEnum.DESKTOP);
        setSizeData({ cardsPerPage: 8, pageCount: 3 });
      } else if (
        innerWidth > documentSizeEnum.MOBILE &&
        innerWidth < documentSizeEnum.TABLET
      ) {
        setSize(documentSizeEnum.TABLET);
        setSizeData({ cardsPerPage: 6, pageCount: 4 });
      } else {
        setSize(documentSizeEnum.MOBILE);
        setSizeData({ cardsPerPage: 3, pageCount: 8 });
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { size, sizeData };
};

export default useResize;
