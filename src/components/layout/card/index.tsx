import { FC, Dispatch, SetStateAction } from "react";
import { Button, Modal } from "@/components/UI";
import { ISliderData } from "@/types/interfaces";
import cn from "classnames";
import s from "./styles.module.scss";

interface PropsType extends ISliderData {
  styles: string;
  isModal: boolean;
  callback: Dispatch<SetStateAction<boolean>>;
}

const Card: FC<PropsType> = ({
  title,
  path,
  styles,
  disc,
  type,
  info,
  isModal,
  callback,
}) => {
  return (
    <div className={cn(styles, s.container)}>
      <img src={path} alt={title} />
      <h3>{title}</h3>
      <Button
        title="Learn more"
        styles={cn("button", s.button)}
        isModal={isModal}
        callback={callback}
      />
    </div>
  );
};

export default Card;
