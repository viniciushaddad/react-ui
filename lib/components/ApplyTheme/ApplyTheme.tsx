import React from 'react'
import { merge } from 'lodash'
import { createGlobalStyle, Theme, ThemeProvider } from 'styled-components'
import Mulish from './fonts/Mulish.ttf'
import Roboto from './fonts/RobotoRegular.ttf'
import ComfortaaVariable from './fonts/ComfortaaVariable.ttf'
import QuicksandVariable from './fonts/QuicksandVariable.ttf'
import SpartanVariable from './fonts/SpartanVariable.ttf'
import defaultTheme from '../../themes/default'
import { node, object, ReactNodeLike } from 'prop-types'

const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
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
    font-family: ${({ theme: { font } }) => font.family.body};
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root {
    ${({ theme: { screen, media, font } }) => `
      ${media.custom(screen.tablet, 'min-width')} {
        font-size: ${font.sizes.web};
      }
      ${media.tablet} {
        font-size: ${font.sizes.tablet};
      }
      ${media.phone} {
        font-size: ${font.sizes.phone};
      }
    `}
  }
`
const ApplyTheme: React.FC<{ children?: ReactNodeLike; theme?: unknown }> = ({ children, theme }) => (
  <ThemeProvider theme={merge(defaultTheme, theme || {})}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
)
ApplyTheme.propTypes = { children: node, theme: object }

export { ApplyTheme }
