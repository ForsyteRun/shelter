import { Dispatch, FC, SetStateAction } from "react";

interface Props {
  title: string;
  styles: string;
  isModal?: boolean;
  callback?: Dispatch<SetStateAction<boolean>>;
}

const Button: FC<Props> = ({
  title,
  styles,
  isModal = false,
  callback = () => {},
}) => {
  return (
    <button className={styles} onClick={() => callback(!isModal)}>
      {title}
    </button>
  );
};

export default Button;
