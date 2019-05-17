import React from 'react';
import Palette from './Palette';
import PropTypes from 'prop-types';
import { arrayPalette } from '../../../data/appData.js';

const Design = props => {
  const { userPalette, selectPalette } = props;
  return (
    <div className="design__colors section__collapse">
      <p className="design__colors-title">colores</p>
      <ul className="design__colors-list">
        {arrayPalette.map((palette, index) => (
          <Palette paletteInfo={palette} key={index} userPalette={userPalette} selectPalette={selectPalette} />
        ))}
      </ul>
    </div>
  );
};

Design.propTypes = {
  selectPalette: PropTypes.func.isRequired,
  userPalette: PropTypes.number.isRequired
};

export default Design;
