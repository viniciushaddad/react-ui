import React, { ReactElement } from 'react'
import { merge } from 'lodash'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Mulish from './fonts/Mulish.ttf'
import Roboto from './fonts/RobotoRegular.ttf'
import ComfortaaVariable from './fonts/ComfortaaVariable.ttf'
import QuicksandVariable from './fonts/QuicksandVariable.ttf'
import SpartanVariable from './fonts/SpartanVariable.ttf'
import defaultTheme from '../../themes/default'
import { element, object } from 'prop-types'

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
    font-family: ${defaultTheme.font.family.body};
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root {
    font-size: ${defaultTheme.font.sizes.web};

    ${defaultTheme.media.tablet} {
      font-size: ${defaultTheme.font.sizes.tablet};
    }
    ${defaultTheme.media.phone} {
      font-size: ${defaultTheme.font.sizes.phone};
    }
  }
`
const ApplyTheme: React.FC<{ children?: ReactElement; theme?: unknown }> = ({ children, theme }) => (
  <ThemeProvider theme={merge(defaultTheme, theme || {})}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
)
ApplyTheme.propTypes = { children: element, theme: object }

export { ApplyTheme }
