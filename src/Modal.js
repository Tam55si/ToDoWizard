import React, { useState } from 'react'

function Modal1({ shown, close }) {
  return shown ? (
    <div
      className="modal-backdrop"
      onClick={() => {
        // close modal when outside of modal is clicked
        close();
      }}
    >
      <div
        className="modal-content"
        onClick={(e) => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}
      >
        <button onClick={close}>Close</button>

        <h1>Look! I'm inside the modal!</h1>
      </div>
    </div>
  ) : null;
}

function Modal() {
  const [modalShown, toggleModal] = useState(false);
  return (
    <div className="App">
      <p>modalShown: {modalShown.toString()}</p>

      <button
        onClick={() => {
          toggleModal(!modalShown);
        }}
      >
        Toggle Modal
      </button>
      <Modal1 shown={modalShown} close={() => {
        toggleModal(false);
      }}
      ></Modal1>
    </div>
  );
}

export default Modal;