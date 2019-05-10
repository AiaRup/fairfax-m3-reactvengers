import React from 'react';
import Collapsible from './Collapsible';
import Palette from './Palette';
import Share from './Share';
import Fill from './Fill';

const ARRAYPALETTE = [
  {
    inputValue: 'paletteblue',
    theme: 1,
    isChecked: true,
    colors: [
      {
        hex: '#114e4e',
        name: 'Dark cyan'
      },
      {
        hex: '#438792',
        name: 'Dirty blue'
      },
      {
        hex: '#a2deaf',
        name: 'Hospital green'
      }
    ]
  },
  {
    inputValue: 'palettered',
    theme: 2,
    isChecked: false,
    colors: [
      {
        hex: '#420101',
        name: 'Chocolatte'
      },
      {
        hex: '#bd1010',
        name: 'Thunderbird'
      },
      {
        hex: '#e95626',
        name: 'Flamingo orange'
      }
    ]
  },
  {
    inputValue: 'palettegrey',
    theme: 3,
    isChecked: false,
    colors: [
      {
        hex: '#3e5b65',
        name: 'Fiord'
      },
      {
        hex: '#dfe5eb',
        name: 'Mystic'
      },
      {
        hex: '#a0c0cf',
        name: 'Rock blue'
      }
    ]
  }
];

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
        <div className="design__colors section__collapse">
          <p className="design__colors-title">colores</p>
          <ul className="design__colors-list">
            {ARRAYPALETTE.map((palette, index) =>
              <Palette paletteInfo={palette} key={index}/>
            )}
          </ul>
        </div>
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
