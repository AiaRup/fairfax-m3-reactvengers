import React from 'react';
import Palette from './Palette';
import PropTypes from 'prop-types';

const ARRAYPALETTE = [
  {
    inputValue: 'paletteblue',
    theme: 1,
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

const Design = (props) => {
  const {userPalette, selectPalette} = props;
  return (
    <div className="design__colors section__collapse">
      <p className="design__colors-title">colores</p>
      <ul className="design__colors-list">
        {ARRAYPALETTE.map((palette, index) => (
          <Palette paletteInfo={palette} key={index} userPalette={userPalette} selectPalette={selectPalette}/>
        ))}
      </ul>
    </div>
  );
};

Design.propTypes = {
  selectPalette: PropTypes.func.isRequired,
  userPalette: PropTypes.number.isRequired
}

export default Design;
