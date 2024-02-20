import { FC } from "react";

interface Props {
  title: string;
  styles: string;
}

const Button: FC<Props> = ({ title, styles }) => {
  return <button className={styles}>{title}</button>;
};

export default Button;
