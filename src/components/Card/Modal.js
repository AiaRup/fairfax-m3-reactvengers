import React from 'react';

class Modal extends React.Component {
  componentDidMount() {
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.body.style.overflow = 'unset';
  }

  render() {
    const { closeModal } = this.props;
    return (
      <div className="container__modal">
        <div className="modal">
          <div className="error__close">
            <i className="fas fa-times" onClick={closeModal} />
          </div>
          <div className="modal__content">
            <h3 className="modal__title">CASI CASI ...</h3>
            <p className="modal__text">Por favor, rellena todos los campos requeridos.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
