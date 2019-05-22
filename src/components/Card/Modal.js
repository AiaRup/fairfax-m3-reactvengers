import React from 'react';

const Modal = ({closeModal, inputErrorArr}) => {
  return(
    <div className="container__modal">
      <div className="modal">
        <div className="error__close" >
          <i className="fas fa-times" onClick={closeModal}></i>
        </div>
        <div className="modal__content">
          <h3 className="modal__title">ERROR!</h3>
          <p className="modal__text">Por favor, rellena todos los campos requeridos:</p>
          <ol className="error__list-modal">
          {inputErrorArr.map((error, index) => <li key={index} className="error__item">{error}</li>)}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Modal;