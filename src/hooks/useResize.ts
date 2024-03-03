import { documentSizeEnum } from "@/types/enum";
import { useEffect, useState } from "react";

const useResize = () => {
  const [isMobile, seIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < documentSizeEnum.MOBILE) {
        seIsMobile(true);
      } else {
        seIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return { isMobile };
};

export default useResize;
