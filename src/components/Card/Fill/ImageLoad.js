import React from 'react';

class ImageLoad extends React.Component {

  render () {
    let { imageLoad, clickLoadImage, getImage, photo } = this.props
    return (
      <div className="fill__field-container field__image-container">
      <label htmlFor="add__img" className="fill__label">imagen de perfil *</label>
      <div className="add__img-container">
        <input
          type="button"
          className="fill__button js__profile-trigger"
          onClick={clickLoadImage}
          value="añadir imagen"
        />
        <input
          id="add__img"
          className="fill__field add__img-input js__profile-upload-btn"
          type="file"
          accept=".png, .jpg, .jpeg"
          name="add__img"
          ref={imageLoad}
          onChange={(event) => {getImage(event)}}
        />
        <div className="fill__preview-little js__profile-preview" style={{backgroundImage: `url(${photo})`}}>
          <img className="img__user" src={photo} alt="User-profile-pic" />
        </div>
      </div>
      </div>
      )
    }
  }


  export default ImageLoad;
