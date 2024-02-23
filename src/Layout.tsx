import { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <>
      {children}
      <div>Footer</div>
    </>
  );
};

export default Layout;
