import React from "react";
import { useGlobalContext } from "./context";

const Modal = () => {
    const { closeModal, correct, questions, isModalOpen } = useGlobalContext();

    return (
        <div
            className={`${
                isModalOpen ? "modal-container isOpen" : "modal-container"
            }`}
        >
            <div className="modal-content">
                <h2>Congrants!</h2>
                <p>
                    You answered of{" "}
                    {((correct / questions.length) * 100).toFixed(0)}% questions
                    correctly
                </p>
                <button className="close-btn" onClick={closeModal}>
                    Play again
                </button>
            </div>
        </div>
    );
};

export default Modal;
