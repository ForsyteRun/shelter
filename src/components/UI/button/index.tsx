import { Dispatch, FC, SetStateAction } from "react";

interface Props {
  title: string;
  styles: string;
  state?: boolean;
  callback?: Dispatch<SetStateAction<boolean>>;
}

const Button: FC<Props> = ({
  title,
  styles,
  state = false,
  callback = () => {},
}) => {
  return (
    <button className={styles} onClick={() => callback(!state)}>
      {title}
    </button>
  );
};

export default Button;
