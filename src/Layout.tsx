import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <h2>Header</h2>
      {children}
      <div>Footer</div>
    </>
  );
};

export default Layout;
