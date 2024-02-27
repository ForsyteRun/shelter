import { FC, MouseEvent, PropsWithChildren } from "react";
import s from "./styles.module.scss";

interface BackgroundWrapperProps {
  handleClick: (event: MouseEvent<HTMLDivElement>) => void;
}

const BackgroundWrapper: FC<PropsWithChildren<BackgroundWrapperProps>> = ({
  children,
  handleClick,
}) => {
  return (
    <div className={s.wrapper} onClick={handleClick}>
      <div className="container">{children}</div>
    </div>
  );
};

export default BackgroundWrapper;
