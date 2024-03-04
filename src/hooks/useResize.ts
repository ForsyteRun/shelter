import { documentSizeEnum } from "@/types/enum";
import { useEffect, useState } from "react";

const useResize = () => {
  const [size, setSize] = useState<documentSizeEnum>(documentSizeEnum.DESKTOP);

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;

      if (innerWidth >= documentSizeEnum.TABLET) {
        setSize(documentSizeEnum.DESKTOP);
      } else if (
        innerWidth > documentSizeEnum.MOBILE &&
        innerWidth < documentSizeEnum.TABLET
      ) {
        setSize(documentSizeEnum.TABLET);
      } else {
        setSize(documentSizeEnum.MOBILE);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { size };
};

export default useResize;
