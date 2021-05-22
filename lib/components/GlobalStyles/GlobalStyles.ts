import { createGlobalStyle } from 'styled-components'

import Mulish from './fonts/Mulish.ttf'
import Roboto from './fonts/RobotoRegular.ttf'
import ComfortaaVariable from './fonts/ComfortaaVariable.ttf'
import QuicksandVariable from './fonts/QuicksandVariable.ttf'
import SpartanVariable from './fonts/SpartanVariable.ttf'
import theme from '../../themes/default'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: Comfortaa;
    src: url(${ComfortaaVariable}) format("truetype");
    font-style: normal;
    font-weight: 1 999;
  }
  @font-face {
    font-family: 'Mulish';
    src: url(${Mulish} format("truetype"))
    font-style: normal;
    font-weight: 1 999;
  }
  @font-face {
    font-family: 'Roboto';
    src: url(${Roboto}) format("truetype");
    font-style: normal;
    font-weight: 1 999;
  }
  @font-face {
    font-family: Spartan;
    src: url(${SpartanVariable}) format("truetype");
    font-style: normal;
    font-weight: 1 999;
  }
  @font-face {
    font-family: 'Quicksand';
    src: url(${QuicksandVariable}) format("truetype");
    font-style: normal;
    font-weight: 1 999;
  }

  * {
    font-family: ${theme.font.family.body};
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root {
    font-size: ${theme.font.sizes.web};

    ${theme.media.tablet} {
      font-size: ${theme.font.sizes.tablet};
    }
    ${theme.media.phone} {
      font-size: ${theme.font.sizes.phone};
    }
  }
`

export { GlobalStyles }
