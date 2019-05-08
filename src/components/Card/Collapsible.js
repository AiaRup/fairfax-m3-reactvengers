import React from 'react';
import TitleCollapsible from './TitleCollapsible';

const Collapsible = () => {
  return (
    <fieldset class="form__fieldset design__main fieldset__active">
          <legend class="fieldset__legend">diseña</legend>
          <TitleCollapsible />
          
        </fieldset>


        <fieldset class="form__fieldset fill__container">
            <legend class="fieldset__legend">rellena</legend>
            <TitleCollapsible />
            <div class="fill__container-form section__collapse">
                <div class="fill__field-container">
                    <label for="name" class="fill__label">nombre completo *</label>
                    <input id="name" class="fill__field" type="text"
                    name="completeName" placeholder="Ej: Sally Jill" />
                </div>
                <div class="fill__field-container">
                    <label for="job" class="fill__label">puesto *</label>
                    <input id="job" class="fill__field" type="text" name="job"
                    placeholder="Ej: Front-end unicorn" />
                </div>
                <div class="fill__field-container field__image-container">
                    <label for="add__img" class="fill__label">imagen de perfil *</label>
                    <div class="add__img-container">
                        <button type="button" class="fill__button js__profile-trigger">añadir imagen</button>
                        <input id="add__img" class="fill__field add__img-input js__profile-upload-btn"
                        type="file" accept=".png, .jpg, .jpeg" name="add__img" />
                        <div class="fill__preview-little js__profile-preview">
                            <img class="img__user" src="" alt="" />
                        </div>
                    </div>
                </div>
                <div class="fill__field-container">
                    <label for="email" class="fill__label">email *</label>
                    <input id="email" class="fill__field" type="email" name="email"
                    placeholder="Ej: sally-hill@gmail.com" data-info="mailto:" />
                </div>
                <div class="fill__field-container">
                    <label for="phone" class="fill__label">teléfono</label>
                    <input id="phone" class="fill__field" type="tel" name="phoneNumber"
                    placeholder="Ej: 555-55-55-55" data-info="tel:" />
                </div>
                <div class="fill__field-container">
                    <label for="linkedin" class="fill__label">linkedin *</label>
                    <input id="linkedin" class="fill__field" type="text"
                    name="linkedin" placeholder="Ej: sally.hill" data-info="https://www.linkedin.com/in/"
                    />
                </div>
                <div class="fill__field-container">
                    <label for="github" class="fill__label">github *</label>
                    <input id="github" class="fill__field" type="text" name="github"
                    placeholder="Ej: sally-hill" data-info="https://github.com/" />
                </div>
                <div class="requiered">* Campos requeridos</div>
            </div>
        </fieldset>


        <fieldset class="form__fieldset share__main">
            <legend class="fieldset__legend">comparte</legend>
            <TitleCollapsible />
            <div class="section__collapse">
                <div>
                    <button type="submit" class="share__button-create"> <i class="far fa-address-card card-icon"></i>Crear tarjeta</button>
                    <div
                    class="errorMsg"></div>
                <div class="loading hidden">
                    <img class="loading__img" src="assets/images/loading.gif" alt="Loading gif">
                </div>
            </div>
            <div class="share__hidden hidden">
                <p class="share__text">La tarjeta ha sido creada:</p>
                <div class="share__link-container"></div> <a href="https://twitter.com/intent/tweet?text=I%20created%20in%20awesome%20profile-cards%20http://beta.adalab.es/fairfax-m2-wildcards/%20my%20business%20card"
                class="share__button-twitter twitter-share-button" target="_blank"><i class="fab fa-twitter twitter-icon"></i>Compartir en twitter</a>

            </div>
    </div>
    </fieldset>
  )
}

export default Collapsible;