import { BackgroundWrapper, Header, Present } from "..";
import { useState, useCallback } from "react";

const Introduce = () => {
  const [open, setOpen] = useState(false);

  const handleClick = useCallback(() => {
    setOpen(!open);

    open
      ? (document.body.style.overflow = "scroll")
      : (document.body.style.overflow = "hidden");
  }, [open]);
  return (
    <BackgroundWrapper handleClick={handleClick}>
      <Header open={open} handleClick={handleClick} />
      <Present />
    </BackgroundWrapper>
  );
};

export default Introduce;
