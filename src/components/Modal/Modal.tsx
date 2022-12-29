import { memo, ReactNode, useMemo } from "react";
import ReactDOM from "react-dom";

import classNames from "classnames";
import styles from "./Modal.module.css";

interface ModalPropsI {
  withCloseCross: boolean;
  setCloseModal: () => void;
  children: ReactNode;
}

const Modal = ({ children, withCloseCross, setCloseModal }: ModalPropsI) => {
  const containerElement = useMemo(
    () => document.getElementById("modal-container"),
    []
  ) as HTMLElement;

  const close = () => {
    setCloseModal();
  };

  return ReactDOM.createPortal(
    <div
      className={classNames(
        styles.modalBackground,
        styles.modalBackgroundActive
      )}
      onClick={close}
    >
      <div
        className={classNames(styles.modal, styles.modalActive)}
        onClick={(e) => e.stopPropagation()}
      >
        {withCloseCross && (
          <div className={styles.closeContainer}>
            <button
              className={styles.closeCrossImage}
              onClick={close}
              aria-label="Close"
            ></button>
          </div>
        )}
        {children}
      </div>
    </div>,
    containerElement
  );
};

export default memo(Modal);
