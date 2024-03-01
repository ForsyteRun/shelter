import {
  FC,
  MouseEvent,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";
import { BackgroundWrapper, Footer, Header } from "./components/layout";
import { disableBody } from "./utils/disableBody";

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleClick = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      const target = event.target as HTMLDivElement;
      const currentTarget = event.currentTarget as HTMLDivElement;

      if (innerWidth > 730) return;

      if (currentTarget.className.includes("burgerIcon")) {
        setOpen(!open);
      } else if (
        !target.className.includes("menu") &&
        !target.className.includes("burgerIcon") &&
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
    <>
      <Header open={open} handleClick={handleClick} />
      {children}
      <BackgroundWrapper style="footerBackground">
        <Footer />
      </BackgroundWrapper>
    </>
  );
};

export default Layout;
