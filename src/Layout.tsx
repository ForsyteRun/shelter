import React, { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div>Header</div>
      {children}
      <div>Footer</div>
    </>
  );
};

export default Layout;
