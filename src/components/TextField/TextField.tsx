import React from 'react'
import { Input, TextFieldProps } from './Input'
import { InputWrapper } from './InputWrapper'
import { InputLabel } from './InputLabel'
import { TextFieldError } from './TextFieldError'
import { TextFieldWrapper } from './TextFieldWrapper'
import { useTextField } from './useTextField.hook'

const TextField: React.FC<TextFieldProps> = (props: TextFieldProps) => {
  const { type, label, inputSize, fullWidth, error } = props
  const { filled, touched, inputValue, labelOnClick, onFocus, onBlur, onInput, inputRef } = useTextField(props)

  return (
    <TextFieldWrapper>
      <InputWrapper>
        <InputLabel {...{ touched, filled, inputSize, error, onClick: labelOnClick }} variant="label">
          {label}
        </InputLabel>
        <Input {...{ type, value: inputValue, onFocus, onInput, onBlur, ref: inputRef, inputSize, fullWidth, error }} />
      </InputWrapper>
      {error && <TextFieldError variant="label">{error}</TextFieldError>}
    </TextFieldWrapper>
  )
}

export { TextField }
