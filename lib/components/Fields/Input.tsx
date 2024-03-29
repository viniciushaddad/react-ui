import { ChangeEventHandler, FocusEventHandler, ReactElement, ReactNode } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { inputCss } from './Input.styles'

const Input: StyledComponent<'input', TextFieldProps> = styled.input<TextFieldProps>`
  ${inputCss}
`

export { Input }

export type InputSizes = 'md' | 'xs' | 'lg'

export interface TextFieldProps {
  label?: string
  name: string
  type:
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week'
  value?: string
  onBlur?: FocusEventHandler<HTMLInputElement>
  onChange?: ChangeEventHandler<HTMLInputElement>
  onFocus?: FocusEventHandler<HTMLInputElement>
  fullWidth?: boolean
  inputSize?: InputSizes
  error?: string
  mb?: string
  disabled?: boolean
  prepend?: ReactElement
  append?: ReactElement
  preIcon?: ReactElement
  endIcon?: ReactElement
}
