import { css } from 'styled-components'
import { ButtonFlavor, ButtonProps } from './Button'

const paddings = {
  xs: '0.5em 1.5em',
  md: '0.5em 1.5em',
  lg: '1em 2em',
}
const fontSizes = {
  xs: '0.75em',
  md: '1em',
  lg: '1.25em',
}

type Colors = {
  bg: string
  font: string
  border: string
}

const colorsByFlavor = (flavor: ButtonFlavor): Colors => {
  const flavors = {
    positive: { bg: 'greenLight', font: 'grayDark', border: 'greenDark' },
    info: { bg: 'sapphireBlue', font: 'white', border: 'darkSlateBlue' },
    warning: { bg: 'maizeCrayola', font: 'white', border: 'sandyBrown' },
    negative: { bg: 'redWood', font: 'white', border: 'darkRed' },
    neutral: { bg: 'grayLighter', font: 'grayDark', border: 'grayLight' },
  }
  return flavors[flavor || 'neutral']
}

const ButtonStyles = css<ButtonProps>`
  margin-left: 1em;
  margin-right: 1em;
  &:first-of-type {
    margin-left: 0;
  }
  &:last-of-type {
    margin-right: 0;
  }

  ${({ theme: { button }, size }) => `
    padding: ${paddings[size || 'md']};
    font-size: ${fontSizes[size || 'md']};
    border-style: ${button.border.style};
    border-width: ${button.border.width};
    border-radius: ${button.border.radius};
  `}
`

export { ButtonStyles, colorsByFlavor }
