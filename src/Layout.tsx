import {
  FC,
  MouseEvent,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Footer, Header } from "./components/layout";
import { disableBody } from "./utils/disableBody";

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      const target = event.target as HTMLElement;
      const currentTarget = event.currentTarget as HTMLElement;

      if (innerWidth > 730) return;

      if (currentTarget.className.includes("burgerIcon")) {
        setOpen(!open);
      } else if (
        (!target.className.includes("menu") &&
          !target.className.includes("burgerIcon")) ||
        (target.tagName === "A" && open)
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
    <>
      <Header open={open} handleClick={handleClick} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
