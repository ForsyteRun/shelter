import { FC } from "react";
import s from "./styles.module.scss";
import cn from "classnames";

interface IProps {
  title: number | string;
  disable?: boolean;
  isSelected?: boolean;
  callback?: () => void;
}

const PaginationNavigationBtn: FC<IProps> = ({
  title,
  disable,
  isSelected,
  callback,
}) => {
  const handleClick = () => {
    if (callback) {
      callback();
    }
  };

  return (
    <div
      className={cn(s.container, {
        [s.disable]: disable,
        [s.selected]: isSelected,
      })}
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
