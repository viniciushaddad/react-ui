import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  DisabledButtonStyle,
  BorderlessButtonStyle,
  ButtonStyles,
  InvertedButtonStyle,
  PrimaryButtonStyle,
} from './Button.styles'
import { Loading } from '../Icons/Spinners'
import { ButtonProps, useButton } from './useButton'

const BaseButton: React.FC<ButtonProps> = ({ loading, ...others }): JSX.Element => {
  const { buttonProps, Element, color, Label, EndIconWithColour, PreIconWithColour } = useButton({ ...others })

  return (
    <Element {...buttonProps}>
      {loading ? (
        <Loading color={color} />
      ) : (
        <>
          {PreIconWithColour}
          {Label}
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
