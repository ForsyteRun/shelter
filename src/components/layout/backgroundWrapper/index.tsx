import { FC, ReactNode } from "react";
import s from "./styles.module.scss";
interface Props {
  children: ReactNode;
}

const BackgroundWrapper: FC<Props> = ({ children }) => {
  return (
    <div className={s.wrapper}>
      <div className="container">{children}</div>
    </div>
  );
};

export default BackgroundWrapper;
