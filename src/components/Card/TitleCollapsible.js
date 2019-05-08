import React from 'react';

const TitleCollapsible = () => {
  return(
    <div class="design__title-wrapper collapse__title ">
      <div class="design__title"> <i class="far fa-object-ungroup design-icon"></i>
        <h3 class="design__title-text">diseña</h3>
      </div>
      <div class="design__button"><i class="fas fa-chevron-down arrow"></i></div>
    </div>

    
    <div class="fill__container-title collapse__title">
      <div class="title__fill-container"> <i class="far fa-keyboard fill__icon"></i>
        <h3 class="title__fill">rellena</h3>
      </div>
      <div class="button__fill"><i class="fas fa-chevron-down arrow"></i></div>
    </div>


    <div class="share__title-wrapper  collapse__title">
      <div class="share__title"> <i class="fas fa-share-alt share-icon"></i>
        <h3 class="share__title-text">comparte</h3>
      </div>
      <div class="share__button-arrow"> <i class="fas fa-chevron-down arrow"></i></div>
    </div>
  )
}

export default TitleCollapsible;