import React from 'react';
import Palette from './Palette';

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

const Design = () => {
  return (
    <div className="design__colors section__collapse">
      <p className="design__colors-title">colores</p>
      <ul className="design__colors-list">
        {ARRAYPALETTE.map((palette, index) => (
          <Palette paletteInfo={palette} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default Design;
