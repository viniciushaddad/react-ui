const PHONE_WIDTH_IN_PIXELS = 576
const TABLET_WIDTH_IN_PIXELS = 768
const WEB_WIDTH_IN_PIXELS = 1024

const mediaQuery = (widthPixels: number, property = 'max-width'): string => `@media (${property}: ${widthPixels}px)`

const media = {
  custom: mediaQuery,
  phone: mediaQuery(PHONE_WIDTH_IN_PIXELS),
  tablet: mediaQuery(TABLET_WIDTH_IN_PIXELS),
  desktop: mediaQuery(WEB_WIDTH_IN_PIXELS),
}

const theme = {
  media,
  screen: {
    phone: PHONE_WIDTH_IN_PIXELS,
    tablet: TABLET_WIDTH_IN_PIXELS,
    web: WEB_WIDTH_IN_PIXELS,
  },
  font: {
    family: {
      titles: 'Quicksand, Comfortaa, Roboto, sans-serif',
      largetitle: 'Quicksand, Comfortaa, Roboto, sans-serif',
      title1: 'Quicksand, Comfortaa, Roboto, sans-serif',
      title2: 'Quicksand, Comfortaa, Roboto, sans-serif',
      title3: 'Quicksand, Comfortaa, Roboto, sans-serif',
      headline: 'Spartan, Mulish, Roboto, sans-serif',
      subhead: 'Spartan, Mulish, Roboto, sans-serif',
      callout: 'Spartan, Mulish, Roboto, sans-serif',
      footnote: 'Spartan, Mulish, Roboto, sans-serif',
      label: 'Quicksand, Comfortaa, Roboto, sans-serif',
      button: 'Quicksand, Comfortaa, Roboto, sans-serif',
      body: 'Spartan, Mulish, Roboto, sans-serif',
      body2: 'Spartan, Mulish, Roboto, sans-serif',
    },
    sizes: {
      web: '16px',
      tablet: '14px',
      phone: '16px',
    },
    weights: { label: 500 },
  },
  button: {
    border: {
      style: 'none',
      width: '1px',
      radius: '0.2em',
    },
  },
  buttons: {
    positive: {
      bg: 'inchworm',
      font: 'white',
      border: 'greenDarker',
      hover: 'greenLight',
      invertedHover: 'greenLigther',
    },
    info: {
      bg: 'sapphireBlue',
      font: 'white',
      border: 'darkSlateBlue',
      hover: 'darkSlateBlue',
      invertedHover: 'blueLighter',
    },
    warning: {
      bg: 'maizeCrayola',
      font: 'white',
      border: 'sandyBrown',
      hover: 'sandyBrown',
      invertedHover: 'crayolaLighter',
    },
    negative: { bg: 'redWood', font: 'white', border: 'darkRed', hover: 'darkRed', invertedHover: 'redLighter' },
    neutral: {
      bg: 'grayLighter',
      font: 'grayDark',
      border: 'grayLight',
      hover: 'grayLight',
      invertedHover: 'grayLighter',
    },
  },
  card: {
    border: {
      width: '1px',
      style: 'solid',
      radius: '.5em',
      color: 'grayLight',
    },
    hover: {
      bg: 'grayLighter',
    },
  },
  input: {
    border: {
      style: 'solid',
      width: '1px',
      radius: '0.2em',
    },
  },
  palette: {
    white: '#fff',
    grayLighter: '#f3f3f3',
    grayLight: '#cfcfcf',
    grayNeutral: '#999',
    grayMedium: '#7f7f7f',
    grayDark: '#545454',
    grayDarker: '#333',
    black: '#000',
    darkSlateBlue: '#54478c',
    sapphireBlue: '#2c699a',
    blueMunsell: '#048ba8',
    blueLighter: '#95d5ef50',
    keppel: '#0db39e',
    mediumAquamarine: '#16db93',
    greenLigther: '#dff8c5',
    greenDarker: '#218b54',
    greenDark: '#56a254',
    greenLight: '#83e377',
    inchworm: '#b9e769',
    corn: '#efea5a',
    crayolaLighter: '#fff18580',
    maizeCrayola: '#f1c453',
    sandyBrown: '#f29e4c',
    redLighter: '#d1888a60',
    redWood: '#c44536',
    darkRed: '#a11d33',
  },
}

export default theme
