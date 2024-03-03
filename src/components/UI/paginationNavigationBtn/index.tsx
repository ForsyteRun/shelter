import { FC } from "react";
import s from "./styles.module.scss";
import cn from "classnames";

interface IProps {
  title: number | string;
  disable?: boolean;
  callback?: () => void;
}

const PaginationNavigationBtn: FC<IProps> = ({ title, disable, callback }) => {
  const handleClick = () => {
    if (callback) {
      callback();
    }
  };

  return (
    <div
      className={cn(s.container, { [s.disable]: disable })}
      onClick={handleClick}
    >
      {typeof title === "number" ? (
        <span>{title}</span>
      ) : (
        <img src={title} alt={title} />
      )}
    </div>
  );
};

export default PaginationNavigationBtn;
