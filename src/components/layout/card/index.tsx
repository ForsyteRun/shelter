import { Button } from "@/components/UI";
import { ISliderData } from "@/types/interfaces";
import cn from "classnames";
import { Dispatch, FC, SetStateAction, memo, useCallback } from "react";
import s from "./styles.module.scss";

interface PropsType {
  data: ISliderData;
  styles: string;
  callback: Dispatch<SetStateAction<ISliderData | null>>;
}

const Card: FC<PropsType> = memo(({ data, styles, callback }) => {
  const { title, path } = data;

  const handleClick = useCallback(() => {
    callback(data);
  }, [data, callback]);

  return (
    <div className={cn(styles, s.container)}>
      <img src={path} alt={title} />
      <h3>{title}</h3>
      <Button
        title="Learn more"
        styles={cn("button", s.button)}
        callback={handleClick}
      />
    </div>
  );
});

export default Card;
