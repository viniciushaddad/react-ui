import { Typography } from 'components/Typography'
import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ButtonStyles } from './Button.styles'

export interface ButtonProps {
  children: ReactNode
  size?: ButtonSizes
  variant?: ButtonVariant
  flavor?: ButtonFlavor
}

export type ButtonSizes = 'md' | 'xs' | 'lg'
export type ButtonVariant = 'primary' | 'inverted' | 'borderless'
export type ButtonFlavor = 'positive' | 'info' | 'warning' | 'negative' | 'neutral'
type Colors = {
  bg: string
  font: string
}

const StyledButton = styled.button`
  ${ButtonStyles}
`

const PrimaryButton = styled(StyledButton)`
  ${({ colors }) => `
    background-color: ${colors.bg};
    color: ${colors.font}; =
    border-color: ${colors.font};
    `}
`

const BorderlessButton = styled(StyledButton)`
  border: none;
`

const InvertedButton = styled(StyledButton)`
  ${({ theme: { palette }, colors: { bg, font } }) => `
    background-color: ${palette[font]};
    color: ${palette[bg]};
    border-color: ${palette[bg]};
  `}
`

const variants = {
  primary: PrimaryButton,
  inverted: InvertedButton,
  borderless: BorderlessButton,
}

const Button: React.FC<ButtonProps> = ({ children, variant, flavor, size }): JSX.Element => {
  const flavors = {
    positive: { bg: 'lightGreen', font: 'grayDark' },
    info: { bg: 'sapphireBlue', font: 'white' },
    warning: { bg: 'maizeCrayola', font: 'white' },
    negative: { bg: 'redWood', font: 'white' },
    neutral: { bg: 'grayLighter', font: 'grayDark' },
  }
  const colors: Colors = flavors[flavor || 'neutral']

  const Button = variants[variant || 'primary']

  return (
    <Button {...{ variant, flavor, size, colors }}>
      <Typography variant="label">{children}</Typography>
    </Button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['primary', 'inverted', 'borderless']),
  size: PropTypes.oneOf(['xs', 'md', 'lg']),
  flavor: PropTypes.oneOf(['positive', 'info', 'warning', 'negative', 'neutral']),
}

export { Button }
