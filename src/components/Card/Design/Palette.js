import React from 'react';
import PropTypes from 'prop-types';

const Palette = props => {
  const { inputValue, theme, colors } = props.paletteInfo;
  const { userPalette, selectPalette } = props;
  const check = userPalette === theme ? true : false;
  return (
    <li className="colors-list-element">
      <label htmlFor={`selection${theme}`} className="design__label">
        <input
          id={`selection${theme}`}
          type="radio"
          value={inputValue}
          name="palettecolors"
          className={`palettecolors theme${theme}`}
          data-theme={theme}
          checked={check}
          onChange={() => {
            selectPalette(theme);
          }}
        />
        <ul className="palettecolor-list">
          {colors.map((color, index) => {
            return (
              <li className="rectangle" key={index} style={{ backgroundColor: color.hex }}>
                {color.name}
              </li>
            );
          })}
        </ul>
      </label>
    </li>
  );
};

Palette.propTypes = {
  paletteInfo: PropTypes.object.isRequired,
  selectPalette: PropTypes.func.isRequired,
  userPalette: PropTypes.number.isRequired
};

export default Palette;
