import styled, { StyledComponent } from 'styled-components'
import { inputCss } from './TextField.styles'

const Input: StyledComponent<'input', TextFieldProps> = styled.input<TextFieldProps>`
  ${inputCss}
`

export { Input }

export interface TextFieldProps {
  label: string
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
  onValueChange?: (value: string) => void
  fullWidth?: boolean
  inputSize?: 'md' | 'xs' | 'lg'
}
