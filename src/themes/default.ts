const TABLET_WIDTH_IN_PIXELS = 768
const WEB_WIDTH_IN_PIXELS = 1024

const theme = {
  screen: {
    tablet: TABLET_WIDTH_IN_PIXELS,
    web: WEB_WIDTH_IN_PIXELS,
  },
  font: {
    family: {
      largetitle: "Gudea, 'Roboto Condensed', 'Montserrat Alternates', Roboto, sans-serif",
      title1: "Gudea, 'Roboto Condensed', 'Montserrat Alternates', Roboto, sans-serif",
      title2: "Gudea, 'Roboto Condensed', 'Montserrat Alternates', Roboto, sans-serif",
      title3: "Gudea, 'Roboto Condensed', 'Montserrat Alternates', Roboto, sans-serif",
      headline: 'Mulish, Roboto, sans-serif',
      callout: 'Mulish, Roboto, sans-serif',
      subhead: 'Mulish, Roboto, sans-serif',
      footnote: 'Mulish, Roboto, sans-serif',
      caption: "Gudea, 'Roboto Condensed', 'Montserrat Alternates', Roboto, sans-serif",
      subcaption: "Gudea, 'Roboto Condensed', 'Montserrat Alternates', Roboto, sans-serif",
      label: "Gudea, 'Roboto Condensed', 'Montserrat Alternates', Roboto, sans-serif",
      body: 'Mulish, Roboto, sans-serif',
      titles: "Gudea, 'Roboto Condensed', 'Montserrat Alternates', Roboto, sans-serif",
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
  },
}

export default theme
