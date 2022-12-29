import { ReactNode } from "react";

import classNames from "classnames";

import styles from "./Button.module.css";

type themeType = "default" | "green" | "red" | "lightRed" | "gray";

interface ButtonPropsI {
  type?: "button" | "submit" | "reset";
  theme?: themeType;
  onClick?: () => void;
  children: ReactNode;
}

const Button = ({
  type = "button",
  theme = "default",
  children,
  onClick,
}: ButtonPropsI) => {
  return (
    <button
      type={type}
      className={classNames(styles.button, styles[theme])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
