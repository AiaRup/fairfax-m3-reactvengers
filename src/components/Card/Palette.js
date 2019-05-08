import React from 'react';

const Palette = ({inputValue, theme, colors}) => {
  return(
    <li class="colors-list-element">
      <label for={`selection${theme}`} class="design__label">
        <input id={`selection${theme}`} type="radio" value={inputValue} name="palettecolors"
        class={`palettecolors theme${theme}`} data-theme={theme} checked />
        <ul class="palettecolor-list">
          {colors.map((color, index) => 
            <li class="rectangle" style={`background-color:${color.hex}`}>{color.name}</li>
          )}
        </ul>
      </label>
    </li>
  )
}

export default Palette;