import React from "react";
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
  return (
    <>
      <CSSTransition
        in={openModal}
        timeout={3000}
        unmountOnExit
        className="modal"
      >
        <div>
          <div className={number ? "modalContent" : "modalContent2"}>
            <div className={number ? "modalHeader" : "modalHeader2"}>
              {modalHeader}
            </div>
            <div className={number ? "modalBody" : "modalBody2"}>
              {modalText}
            </div>
            <button
              onPointerDown={handleClose}
              className={number ? "modalBtn" : "modalBtn2"}
            >
              {modalBtn}
            </button>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default Modal;
