import React, { useLayoutEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./Modal.css";

const Modal = ({
  openModal,
  handleClose,
  setOpenModal,
  modalHeader,
  modalText,
  modalBtn,
  number,
}) => {
  const [modalStyle, setModalStyle] = useState(true);

  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      if (!number) {
        setModalStyle(false);
      }
    }, 1000);
  }, [number]);

  return (
    <>
      <CSSTransition
        in={openModal}
        timeout={1000}
        unmountOnExit
        className="modal"
      >
        <div>
          <div className={modalStyle ? "modalContent" : "modalContent2"}>
            <div className={modalStyle ? "modalHeader" : "modalHeader2"}>
              {modalHeader}
            </div>
            <div className={modalStyle ? "modalBody" : "modalBody2"}>
              {modalText}
            </div>
            {modalStyle ? (
              <button
                onPointerDown={handleClose}
                className="modalBtn"
              >
                {modalBtn}
              </button>
            ) : null}
            {!modalStyle ? (
              <a href="https://hr.pmiopen.com/s/login/?ec=302&startURL=%2Fs%2Fiqos-originals-duo-bodovi">
                <button className="modalBtn2">
                  {modalBtn}
                </button>{" "}
              </a>
            ) : null}
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default Modal;
