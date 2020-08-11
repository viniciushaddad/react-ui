import React from 'react'
import styled from 'styled-components'
import { Typography } from 'components/Typography'

const InputWrapper = styled.div`
  margin-bottom: 1em;
`

const Input = styled.input`
  border-width: 0;
  border-style: ${({ theme: { input } }) => input.border.style};
  border-bottom-width: ${({ theme: { input } }) => input.border.width};
  border-bottom-color: ${({ theme: { palette } }) => palette.grayMedium};
  padding: 0.25em 0.5em;
`

interface TextFieldProps {
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
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void
}

const TextField: React.FunctionComponent<TextFieldProps> = ({ label, type, value, onClick }) => (
  <InputWrapper>
    <Typography variant="label">{label}</Typography>
    <Input {...{ type, value, onClick }} />
  </InputWrapper>
)

export { TextField }
