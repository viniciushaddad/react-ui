const PHONE_WIDTH_IN_PIXELS = 576
const TABLET_WIDTH_IN_PIXELS = 768
const WEB_WIDTH_IN_PIXELS = 1024

const theme = {
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
      callout: 'Spartan, Mulish, Roboto, sans-serif',
      subhead: 'Spartan, Mulish, Roboto, sans-serif',
      footnote: 'Spartan, Mulish, Roboto, sans-serif',
      caption: 'Quicksand, Comfortaa, Roboto, sans-serif',
      subcaption: 'Quicksand, Comfortaa, Roboto, sans-serif',
      label: 'Quicksand, Comfortaa, Roboto, sans-serif',
      body: 'Spartan, Mulish, Roboto, sans-serif',
    },
    sizes: {
      web: '16px',
      tablet: '14px',
      phone: '16px',
    },
    weights: { label: 500 },
  },
  button: {
    neutral: {
      bg: '#e7e7e7',
      color: '#444',
    },
  },
  card: {
    border: { radius: '.5em' },
  },
  input: {
    border: {
      style: 'solid',
      width: '1px',
      radius: '0.33em',
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
    keppel: '#0db39e',
    mediumAquamarine: '#16db93',
    lightGreen: '#83e377',
    inchworm: '#b9e769',
    corn: '#efea5a',
    maizeCrayola: '#f1c453',
    sandyBrown: '#f29e4c',
    redWood: '#c44536',
    darkRed: '#a11d33',
  },
}

export default theme
