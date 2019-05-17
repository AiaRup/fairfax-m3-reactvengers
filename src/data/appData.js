const infoLoading = {
  title: 'Crea tu tarjeta de visita',
  description: 'Crea mejores contactos profesionales de forma fácil y cómoda',
  iconsArr: ['Diseña', 'Rellena', 'Comparte'],
  btnText: 'comenzar',
  teamName: 'ReactVengers'
};

export { infoLoading };

const arrayPalette = [
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

export { arrayPalette };

const iconsArr = [
  {
    liClass: 'sm__email',
    linkClass: 'email__link',
    iconClass: 'far fa-envelope',
    hrefDefault: 'mailto:'
  },
  {
    liClass: 'sm__phone',
    linkClass: 'mobile__link',
    iconClass: 'fas fa-mobile-alt',
    hrefDefault: 'tel:'
  },
  {
    liClass: 'sm__linkedin',
    linkClass: 'linkedin__link',
    iconClass: 'fab fa-linkedin-in',
    hrefDefault: 'https://www.linkedin.com/in/'
  },
  {
    liClass: 'sm__github',
    linkClass: 'github__link',
    iconClass: 'fab fa-github-alt',
    hrefDefault: 'https://github.com/'
  }
];

export { iconsArr };

const titlesArr = [
  {
    wrapperClass: 'design__title-wrapper',
    containerClass: 'design__title',
    iconClass: 'far fa-object-ungroup design-icon',
    titleClass: 'design__title-text',
    title: 'diseña',
    id: 'design',
    arrowClass: 'design__button'
  },
  {
    wrapperClass: 'fill__container-title',
    containerClass: 'title__fill-container',
    iconClass: 'far fa-keyboard fill__icon',
    titleClass: 'title__fill',
    title: 'rellena',
    id: 'fill',
    arrowClass: 'button__fill'
  },
  {
    wrapperClass: 'share__title-wrapper',
    containerClass: 'share__title',
    iconClass: 'fas fa-share-alt share-icon',
    titleClass: 'share__title-text',
    title: 'comparte',
    id: 'share',
    arrowClass: 'share__button-arrow'
  }
];

export { titlesArr };
