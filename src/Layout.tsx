import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <h1>Header</h1>
      {children}
      <div>Footer</div>
    </>
  );
};

export default Layout;
