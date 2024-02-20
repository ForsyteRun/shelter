import { FC, PropsWithChildren } from "react";
import s from "./styles.module.scss";

const BackgroundWrapper: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <div className={s.wrapper}>
      <div className="container">{children}</div>
    </div>
  );
};

export default BackgroundWrapper;
