import { FC, PropsWithChildren } from "react";

interface Props {
  style: string;
}

const BackgroundWrapper: FC<PropsWithChildren<Props>> = ({
  children,
  style,
}) => {
  return <div className={style}>{children}</div>;
};

export default BackgroundWrapper;
