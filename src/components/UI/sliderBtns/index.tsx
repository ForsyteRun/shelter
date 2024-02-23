import s from "./styles.module.scss";

const SliderBtns = () => {
  return (
    <>
      <button className={s.buttonLeft}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="28"
          viewBox="2 0 24 20"
        >
          <path
            d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
            fill="#292929"
          />
        </svg>
      </button>
      <button className={s.buttonRight}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="28"
          viewBox="-2 0  24 20"
        >
          <path
            d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"
            fill="#292929"
          />
        </svg>
      </button>
    </>
  );
};

export default SliderBtns;
