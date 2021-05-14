import styled from 'styled-components'
import {
  ButtonStyles,
  PrimaryButtonStyle,
  BorderlessButtonStyle,
  InvertedButtonStyle,
  DisabledButtonStyle,
} from './Button.styles'

const BaseButton = styled.button`
  ${ButtonStyles}
  ${PrimaryButtonStyle}
  ${InvertedButtonStyle}
  ${BorderlessButtonStyle}
  ${DisabledButtonStyle}
`

export { BaseButton }
