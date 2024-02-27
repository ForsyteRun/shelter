import { BackgroundWrapper, Header, Present } from "..";
import { useState, useEffect, useCallback, MouseEvent } from "react";

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
    open
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll");
  }, [open]);

  return (
    <BackgroundWrapper handleClick={handleClick}>
      <Header open={open} handleClick={handleClick} />
      <Present />
    </BackgroundWrapper>
  );
};

export default Introduce;
