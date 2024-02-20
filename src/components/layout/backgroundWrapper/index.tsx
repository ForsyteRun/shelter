import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const BackgroundWrapper: FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default BackgroundWrapper;
