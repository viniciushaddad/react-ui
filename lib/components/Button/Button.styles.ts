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
  hover: string
  invertedHover: string
}

const colorsByFlavor = (flavor: ButtonFlavor): Colors => {
  const flavors = {
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
  }
  return flavors[flavor || 'neutral']
}

const ButtonStyles = css<ButtonProps>`
  cursor: pointer;
  margin-left: 1em;
  margin-right: 1em;
  min-width: 15em;
  ${({ preIcon, endIcon, loading }) =>
    !loading &&
    (preIcon || endIcon) &&
    `
      display: inline-flex;
      justify-content: space-between;
      align-items: center;
    `}

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

  ${({ theme: { palette }, flavor }) => {
    const { hover } = colorsByFlavor(flavor || 'neutral')

    return `
      &:hover {
        background-color: ${palette[hover]};
      }
    `
  }}

  ${({ block }) => block && `min-width: unset; width: 100%; `}
`

const PrimaryButtonStyle = css<ButtonProps>`
  ${({ theme: { palette }, flavor }) => {
    const { font, bg, border } = colorsByFlavor(flavor || 'neutral')

    return `
      background-color: ${palette[bg]};
      color: ${palette[font]};
      border-color: ${palette[border]};
    `
  }}
`

const InvertedButtonStyle = css<ButtonProps>`
  ${({ theme: { palette }, flavor, variant }) => {
    const { font, border, invertedHover } = colorsByFlavor(flavor || 'neutral')

    if (variant !== 'inverted') return ``

    return `
      background-color: ${palette[font]};
      color: ${palette[border]};
      border-color: ${palette[border]};
      border-style: solid;

      &:hover {
        background-color: ${palette[invertedHover]};
      }
    `
  }}
`

const BorderlessButtonStyle = css<ButtonProps>`
  ${({ variant }) => (variant === 'borderless' ? `border: none;` : '')}
`

const DisabledButtonStyle = css<ButtonProps>`
  ${({ theme: { palette }, disabled }) =>
    disabled &&
    `
      background-color: ${palette.grayLight};
      color: ${palette.grayMedium};
      cursor: not-allowed;

      &:hover {
        background-color: ${palette.grayLight};
      }
  `}
`

export {
  ButtonStyles,
  PrimaryButtonStyle,
  BorderlessButtonStyle,
  InvertedButtonStyle,
  DisabledButtonStyle,
  colorsByFlavor,
}
