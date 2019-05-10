import React from 'react';
import Collapsible from './Collapsible';
import Share from './Share/Share';
import Fill from './Fill/Fill';
import Design from './Design/Design';


const ARRAYTITLE = [
  {
    wrapperClass: 'design__title-wrapper',
    containerClass: 'design__title',
    iconClass: 'far fa-object-ungroup design-icon',
    titleClass: 'design__title-text',
    title: 'diseña',
    arrowClass: 'design__button'
  },
  {
    wrapperClass: 'fill__container-title',
    containerClass: 'title__fill-container',
    iconClass: 'far fa-keyboard fill__icon',
    titleClass: 'title__fill',
    title: 'rellena',
    arrowClass: 'button__fill'
  },
  {
    wrapperClass: 'share__title-wrapper',
    containerClass: 'share__title',
    iconClass: 'fas fa-share-alt share-icon',
    titleClass: 'share__title-text',
    title: 'comparte',
    arrowClass: 'share__button-arrow'
  }
];

const Form = () => {
  return (
    <form className="main__settings" action="" method="POST">
      {/* props to pass to the collapse component */}
      <Collapsible titleInfo={ARRAYTITLE[0]} fieldsetClass="design__main" legendText="diseña">
        <Design />
      </Collapsible>
      <Collapsible titleInfo={ARRAYTITLE[1]} fieldsetClass="fill__container" legendText="rellena">
        <Fill />
      </Collapsible>
      <Collapsible titleInfo={ARRAYTITLE[2]} fieldsetClass="share__main" legendText="comparte">
        <Share/>
      </Collapsible>
    </form>
  );
};

export default Form;
