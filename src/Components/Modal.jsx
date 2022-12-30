import React from "react";
import "../Styles/Modal.scss";
import ModalImg from "./ModalImg";

const Modal = (genderProp, closeModal) => {
    console.log(closeModal)

    return (

        <div className="modal">
            <div className="modal_content">
               <h1>Modal</h1>
               <button onClick={() => closeModal(false)}>Close</button>
            </div>
        </div>
    )
}

export default Modal;