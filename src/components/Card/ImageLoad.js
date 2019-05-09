import React from 'react';

const ImageLoad = () => {
  return (
    <div class="fill__field-container field__image-container">
    <label for="add__img" class="fill__label">imagen de perfil *</label>
    <div class="add__img-container">
      <button type="button" class="fill__button js__profile-trigger">
        añadir imagen
      </button>
      <input
        id="add__img"
        class="fill__field add__img-input js__profile-upload-btn"
        type="file"
        accept=".png, .jpg, .jpeg"
        name="add__img"
      />
      <div class="fill__preview-little js__profile-preview">
        <img class="img__user" src="" alt="" />
      </div>
    </div>
    </div>
      )
  }

  export default ImageLoad;
