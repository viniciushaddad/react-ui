import React, { JSXElementConstructor, ReactElement, ReactNode } from 'react'
import { Typography } from '../Typography'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  DisabledButtonStyle,
  BorderlessButtonStyle,
  ButtonStyles,
  colorsByFlavor,
  InvertedButtonStyle,
  PrimaryButtonStyle,
} from './Button.styles'
import { Loading } from '../Icons/Spinners'

export interface ButtonProps {
  as?: JSXElementConstructor<ButtonProps>
  children: ReactNode
  size?: ButtonSizes
  variant?: ButtonVariant
  flavor?: ButtonFlavor
  preIcon?: ReactElement
  endIcon?: ReactElement
  loading?: boolean
  disabled?: boolean
  onClick?: () => void
  block?: boolean
}

export type ButtonSizes = 'md' | 'xs' | 'lg'
export type ButtonVariant = 'primary' | 'inverted' | 'borderless'
export type ButtonFlavor = 'positive' | 'info' | 'warning' | 'negative' | 'neutral'

const SimpleButton = styled.button<ButtonProps>``
const BaseButton: React.FC<ButtonProps> = ({
  as,
  children,
  variant,
  flavor,
  preIcon,
  endIcon,
  loading,
  ...others
}): JSX.Element => {
  const { font, border } = colorsByFlavor(flavor || 'neutral')
  const inverted = variant === 'inverted'
  const color = inverted ? border : font
  const PreIconWithColour = preIcon && React.cloneElement(preIcon, { color })
  const EndIconWithColour = endIcon && React.cloneElement(endIcon, { color })
  const buttonProps = { variant, flavor, preIcon, endIcon, ...others }
  const Element = as || SimpleButton

  return (
    <Element {...buttonProps}>
      {loading ? (
        <Loading {...{ color }} />
      ) : (
        <>
          {PreIconWithColour}
          <Typography variant="button" {...{ color }}>
            {children}
          </Typography>
          {EndIconWithColour}
        </>
      )}
    </Element>
  )
}

const Button = styled(BaseButton)`
  ${ButtonStyles}
  ${PrimaryButtonStyle}
  ${InvertedButtonStyle}
  ${BorderlessButtonStyle}
  ${DisabledButtonStyle}
`

BaseButton.propTypes = {
  as: PropTypes.any,
  children: PropTypes.node,
  preIcon: PropTypes.element,
  endIcon: PropTypes.element,
  loading: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'inverted', 'borderless']),
  size: PropTypes.oneOf(['xs', 'md', 'lg']),
  flavor: PropTypes.oneOf(['positive', 'info', 'warning', 'negative', 'neutral']),
}

Button.propTypes = {
  as: PropTypes.any,
  children: PropTypes.node,
  preIcon: PropTypes.element,
  endIcon: PropTypes.element,
  loading: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'inverted', 'borderless']),
  size: PropTypes.oneOf(['xs', 'md', 'lg']),
  flavor: PropTypes.oneOf(['positive', 'info', 'warning', 'negative', 'neutral']),
}

export { Button }
