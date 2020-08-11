import { createGlobalStyle } from 'styled-components'

import GudeaRegular from 'fonts/GudeaRegular.ttf'
import Mulish from 'fonts/Mulish.ttf'
import Roboto from 'fonts/RobotoRegular.ttf'
import RobotoCondensed from 'fonts/RobotoCondensedRegular.ttf'
import BalooTamma2 from 'fonts/BalooTamma2-Regular.ttf'
import MonstserratAlternatesRegular from 'fonts/MontserratAlternatesRegular.ttf'
import theme from 'themes/default'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: Gudea;
    src: url(${GudeaRegular});
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Mulish';
    src: url(${Mulish});
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto';
    src: url(${Roboto});
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto Condensed';
    src: url(${RobotoCondensed});
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat Alternates';
    src: url(${MonstserratAlternatesRegular});
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Baloo Tamma 2';
    src: url(${BalooTamma2});
    font-weight: 300;
    font-style: normal;
  }

  * {
    font-family: Mulish, Roboto, sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root {
    font-size: 16px;

    @media (min-width: ${theme.screen.tablet}px) {
      font-size: 14px;
    }

    @media (min-width: ${theme.screen.web}px) {
      font-size: 12px;
    }
  }
`

export { GlobalStyles }
