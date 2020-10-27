import { Typography } from 'components/Typography'
import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ButtonStyles, colorsByFlavor } from './Button.styles'

export interface ButtonProps {
  children: ReactNode
  size?: ButtonSizes
  variant?: ButtonVariant
  flavor?: ButtonFlavor
}

export type ButtonSizes = 'md' | 'xs' | 'lg'
export type ButtonVariant = 'primary' | 'inverted' | 'borderless'
export type ButtonFlavor = 'positive' | 'info' | 'warning' | 'negative' | 'neutral'

const StyledButton = styled.button`
  ${ButtonStyles}
`

const PrimaryButton = styled(StyledButton)`
  ${({ theme: { palette }, flavor }) => {
    const { font, bg, border } = colorsByFlavor(flavor || 'neutral')

    return `
      background-color: ${palette[bg]};
      color: ${palette[font]};
      border-color: ${palette[border]};
    `
  }}
`

const InvertedButton = styled(StyledButton)`
  ${({ theme: { palette }, flavor }) => {
    const { font, bg, border } = colorsByFlavor(flavor || 'neutral')

    return `
      background-color: ${palette[font]};
      color: ${palette[bg]};
      border-color: ${palette[border]};
    `
  }}
`

const BorderlessButton = styled(StyledButton)`
  border: none;
`

const variants = {
  primary: PrimaryButton,
  inverted: InvertedButton,
  borderless: BorderlessButton,
}

const Button: React.FC<ButtonProps> = ({ children, variant, flavor, size }): JSX.Element => {
  const Button = variants[variant || 'primary']
  const { font, bg } = colorsByFlavor(flavor || 'neutral')
  const inverted = variant === 'inverted'

  return (
    <Button {...{ variant, flavor, size }}>
      <Typography variant="label" color={inverted ? bg : font}>
        {children}
      </Typography>
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
