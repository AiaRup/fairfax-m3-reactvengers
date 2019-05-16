import React from 'react';

class ImageLoad extends React.Component {

  render () {
    const { imageLoad, clickLoadImage } = this.props
    return (
      <div className="fill__field-container field__image-container">
      <label htmlFor="add__img" className="fill__label">imagen de hola perfil *</label>
      <div className="add__img-container">
        <button
          type="button"
          className="fill__button js__profile-trigger"
          onClick={clickLoadImage}
          >
          añadir imagen
        </button>
        <input
          id="add__img"
          className="fill__field add__img-input js__profile-upload-btn"
          type="file"
          accept=".png, .jpg, .jpeg"
          name="add__img"
          ref={imageLoad}
        />
        <div className="fill__preview-little js__profile-preview">
          <img className="img__user" src="" alt="" />
        </div>
      </div>
      </div>
        )
    }
  }


  export default ImageLoad;
