import { disableBody } from "@/utils/disableBody";
import { MouseEvent, useCallback, useEffect, useState } from "react";
import { BackgroundWrapper, Header, Present } from "..";

const Introduce = () => {
  const [open, setOpen] = useState(false);

  const handleClick = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      const target = event.target as HTMLDivElement;

      if (innerWidth > 730) return;

      if (target.closest(".burgerContainer")) {
        setOpen(!open);
      } else if (
        !target.className.includes("menu") &&
        !target.className.includes("burgerContainer") &&
        open
      ) {
        setOpen(false);
      }
    },
    [open]
  );

  useEffect(() => {
    disableBody(open);
  }, [open]);

  return (
    <BackgroundWrapper handleClick={handleClick}>
      <Header open={open} handleClick={handleClick} />
      <Present />
    </BackgroundWrapper>
  );
};

export default Introduce;
