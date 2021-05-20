import React from 'react'
import { Input, TextFieldProps } from './Input'
import { InputWrapper } from './InputWrapper'
import { InputLabel } from './InputLabel'
import { TextFieldError } from './TextFieldError'
import { TextFieldWrapper } from './TextFieldWrapper'
import { useTextField } from './useTextField.hook'

const TextField: React.FC<TextFieldProps> = (props: TextFieldProps) => {
  const { label, error, inputSize, ...rest } = props
  const { filled, touched, inputValue, onFocus, onBlur, onInput, inputRef, inputId } = useTextField(props)

  return (
    <TextFieldWrapper>
      <InputWrapper>
        <InputLabel htmlFor={inputId} {...{ touched, filled, inputSize, error }} variant="label">
          {label}
        </InputLabel>
        <Input
          id={inputId}
          {...{
            ...rest,
            defaultValue: inputValue,
            onFocus,
            onInput,
            onBlur,
            ref: inputRef,
            error,
            inputSize,
          }}
        />
      </InputWrapper>
      {error && <TextFieldError variant="label">{error}</TextFieldError>}
    </TextFieldWrapper>
  )
}

export { TextField }
