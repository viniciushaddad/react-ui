import React, { JSXElementConstructor, ReactElement, ReactNode } from 'react'
import { uniqueId } from 'lodash'
import styled from 'styled-components'
import { colorsByFlavor } from './Button.styles'
import { Typography } from '../Typography'
import { TypographyVariant } from '../Typography/Typography'

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

const PureButton = styled.button<ButtonProps>``
const useButton = ({ as, variant, flavor, preIcon, children, endIcon, ...others }: UseButtonProps): UseButtonHook => {
  const { font, border } = colorsByFlavor(flavor || 'neutral')
  const inverted = variant === 'inverted'
  const color = inverted ? border : font
  const PreIconWithColour = preIcon && React.cloneElement(preIcon, { color })
  const EndIconWithColour = endIcon && React.cloneElement(endIcon, { color })
  const buttonId = uniqueId('button-id-')
  const buttonProps = { variant, flavor, preIcon, endIcon, ...others, id: buttonId }
  const labelProps = { variant: 'button' as TypographyVariant, color, htmlFor: buttonId }
  const Element = as || PureButton
  const Label = React.createElement(Typography, { ...labelProps }, children)

  return { Element, buttonProps, color, Label, EndIconWithColour, PreIconWithColour }
}

interface UseButtonProps {
  children: ReactNode
  as?: JSXElementConstructor<ButtonProps>
  size?: ButtonSizes
  variant?: ButtonVariant
  flavor?: ButtonFlavor
  preIcon?: ReactElement
  endIcon?: ReactElement
  disabled?: boolean
  onClick?: () => void
  block?: boolean
}

type UseButtonHook = {
  buttonProps: {
    size?: ButtonSizes
    variant?: ButtonVariant
    flavor?: ButtonFlavor
    preIcon?: ReactElement
    endIcon?: ReactElement
    disabled?: boolean
    onClick?: () => void
    block?: boolean
  }
  Label: ReactElement
  Element: JSXElementConstructor<ButtonProps>
  PreIconWithColour?: ReactElement
  EndIconWithColour?: ReactElement
  color: string
}

export { useButton }
