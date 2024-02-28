export const disableBody = (value: boolean) => {
  value
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "scroll");
};
