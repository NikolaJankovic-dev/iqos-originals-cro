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
  const [modalStyle, setModalStyle] = useState(true)

  useLayoutEffect(()=>{
    const timer = setTimeout(()=>{
      if (!number){
      setModalStyle(false)
    }
    }, 1000)
    
  }, [number])

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
            <button
              onPointerDown={handleClose}
              className={modalStyle ? "modalBtn" : "modalBtn2"}
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
