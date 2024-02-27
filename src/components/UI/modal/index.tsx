import { ISliderData } from "@/types/interfaces";
import { FC } from "react";
import s from "./styles.module.scss";

const Modal: FC<Omit<ISliderData, "path">> = ({ disc, title, info, type }) => {
  return <div className={s.modalContainer}>Modal</div>;
};

export default Modal;
