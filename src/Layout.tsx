import { FC, PropsWithChildren } from "react";
import { BackgroundWrapper, Footer } from "./components/layout";

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <>
      {children}
      <BackgroundWrapper>
        <Footer />
      </BackgroundWrapper>
    </>
  );
};

export default Layout;
