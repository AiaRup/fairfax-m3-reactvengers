import React from 'react';
import TitleCollapsible from './TitleCollapsible';

const Collapsible = ({fieldsetClass, titleInfo, children, legendText}) => {
  return (
    <fieldset className={`form__fieldset ${fieldsetClass} fieldset__active`}>
      <legend className="fieldset__legend">{legendText}</legend>
          <TitleCollapsible titleInfo={titleInfo}/>
          {children}
          
      </fieldset>


    //     <fieldset className="form__fieldset fill__container">
    //         <legend className="fieldset__legend">rellena</legend>
    //         <TitleCollapsible />
    //         <div className="fill__container-form section__collapse">
    //             <div className="fill__field-container">
    //                 <label for="name" className="fill__label">nombre completo *</label>
    //                 <input id="name" className="fill__field" type="text"
    //                 name="completeName" placeholder="Ej: Sally Jill" />
    //             </div>
    //             <div className="fill__field-container">
    //                 <label for="job" className="fill__label">puesto *</label>
    //                 <input id="job" className="fill__field" type="text" name="job"
    //                 placeholder="Ej: Front-end unicorn" />
    //             </div>
    //             <div className="fill__field-container field__image-container">
    //                 <label for="add__img" className="fill__label">imagen de perfil *</label>
    //                 <div className="add__img-container">
    //                     <button type="button" className="fill__button js__profile-trigger">añadir imagen</button>
    //                     <input id="add__img" className="fill__field add__img-input js__profile-upload-btn"
    //                     type="file" accept=".png, .jpg, .jpeg" name="add__img" />
    //                     <div className="fill__preview-little js__profile-preview">
    //                         <img className="img__user" src="" alt="" />
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="fill__field-container">
    //                 <label for="email" className="fill__label">email *</label>
    //                 <input id="email" className="fill__field" type="email" name="email"
    //                 placeholder="Ej: sally-hill@gmail.com" data-info="mailto:" />
    //             </div>
    //             <div className="fill__field-container">
    //                 <label for="phone" className="fill__label">teléfono</label>
    //                 <input id="phone" className="fill__field" type="tel" name="phoneNumber"
    //                 placeholder="Ej: 555-55-55-55" data-info="tel:" />
    //             </div>
    //             <div className="fill__field-container">
    //                 <label for="linkedin" className="fill__label">linkedin *</label>
    //                 <input id="linkedin" className="fill__field" type="text"
    //                 name="linkedin" placeholder="Ej: sally.hill" data-info="https://www.linkedin.com/in/"
    //                 />
    //             </div>
    //             <div className="fill__field-container">
    //                 <label for="github" className="fill__label">github *</label>
    //                 <input id="github" className="fill__field" type="text" name="github"
    //                 placeholder="Ej: sally-hill" data-info="https://github.com/" />
    //             </div>
    //             <div className="requiered">* Campos requeridos</div>
    //         </div>
    //     </fieldset>


    //     <fieldset className="form__fieldset share__main">
    //         <legend className="fieldset__legend">comparte</legend>
    //         <TitleCollapsible />
    //         <div className="section__collapse">
    //             <div>
    //                 <button type="submit" className="share__button-create"> <i className="far fa-address-card card-icon"></i>Crear tarjeta</button>
    //                 <div
    //                 className="errorMsg"></div>
    //             <div className="loading hidden">
    //                 <img className="loading__img" src="assets/images/loading.gif" alt="Loading gif">
    //             </div>
    //         </div>
    //         <div className="share__hidden hidden">
    //             <p className="share__text">La tarjeta ha sido creada:</p>
    //             <div className="share__link-container"></div> <a href="https://twitter.com/intent/tweet?text=I%20created%20in%20awesome%20profile-cards%20http://beta.adalab.es/fairfax-m2-wildcards/%20my%20business%20card"
    //             className="share__button-twitter twitter-share-button" target="_blank"><i className="fab fa-twitter twitter-icon"></i>Compartir en twitter</a>

    //         </div>
    // </div>
    // </fieldset>
  )
}

export default Collapsible;