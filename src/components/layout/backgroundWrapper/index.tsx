import { FC, MouseEvent, ReactNode } from "react";
import s from "./styles.module.scss";

interface BackgroundWrapperProps {
  handleClick: () => void;
  children: ReactNode;
}

const BackgroundWrapper: FC<BackgroundWrapperProps> = ({
  children,
  handleClick,
}) => {
  const handleClickModal = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;

    if (!target.className.includes("active")) {
      handleClick();
    }
  };

  return (
    <div className={s.wrapper} onClick={handleClickModal}>
      <div className="container">{children}</div>
    </div>
  );
};

export default BackgroundWrapper;
