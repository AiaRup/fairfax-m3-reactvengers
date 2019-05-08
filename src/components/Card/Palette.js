import React from 'react';

const Palette = props => {
  const {inputValue, theme, colors, isChecked}=props.paletteInfo;
  return(
    <li className="colors-list-element">
      <label htmlFor={`selection${theme}`} className="design__label">
        <input id={`selection${theme}`} type="radio" value={inputValue} name="palettecolors"
        className={`palettecolors theme${theme}`} data-theme={theme} checked={isChecked} />
        <ul className="palettecolor-list">
          {colors.map((color, index) =>
          {
            const ITEMSTYLE = {
              backgroundColor: color.hex,
            }
            return <li className="rectangle" key={index} style={ITEMSTYLE}>{color.name}</li>
          } 
          )}
        </ul>
      </label>
    </li>
  )
}

export default Palette;