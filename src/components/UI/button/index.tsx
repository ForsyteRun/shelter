import { FC } from "react";

interface Props {
  title: string;
  styles: string;
  callback: () => void;
}

const Button: FC<Props> = ({ title, styles, callback = () => {} }) => {
  return (
    <button className={styles} onClick={callback}>
      {title}
    </button>
  );
};

export default Button;
