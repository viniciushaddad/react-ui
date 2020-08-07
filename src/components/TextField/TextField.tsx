import React from 'react'
import styled from 'styled-components'

const InputWrapper = styled.div`
  margin-bottom: 1em;
`
const Label = styled.label`
  font-size: 1em;
  font-weight: ${({
    theme: {
      font: { weights }
    }
  }) => weights.label};
  color: ${({ theme: { label } }) => label.color};
`

const Input = styled.input`
  border-width: 0;
  border-style: ${({ theme: { input } }) => input.border.style};
  border-bottom-width: ${({ theme: { input } }) => input.border.width};
  border-bottom-color: ${({ theme: { input } }) => input.border.color};
  padding: .25em .5em
`

interface TextFieldProps {
  label: string
  type: 'button' | 'checkbox' | 'color' | 'date' | 'datetime' | 'email' | 'file' | 'hidden' | 'image' | 'month' |
  'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week'
  value?: string
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void
}

const TextField: React.FunctionComponent<TextFieldProps> = ({ label, type, value, onClick }) => (
  <InputWrapper>
    <Label>{label}</Label>
    <Input {...{ type, value, onClick }} />
  </InputWrapper>
)

export { TextField }
