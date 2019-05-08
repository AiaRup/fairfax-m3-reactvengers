import React from 'react';
import Collapsible from './Collapsible';
import Palette from './Palette';

const ARRAYPALETTE = [
  {
    inputValue: 'paletteblue',
    theme: 1,
    colors: [{
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
    colors: [{
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
    colors: [{
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
]

const Form = () => {
  return (
    <form class="main__settings" action="" method="POST">
      <Collapsible>
        <div class="design__colors section__collapse">
          <p class="design__colors-title">colores</p>
          <ul class="design__colors-list">
            {ARRAYPALETTE.map((palette, index) =>
              <Palette paletteInfo={palette} key={index}/>
            )}
            
          </ul>
        </div>
      </Collapsible>
    </form>
  )
}

export default Form;