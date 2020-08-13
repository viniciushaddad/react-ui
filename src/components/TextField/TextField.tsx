import React from 'react'
import { Typography } from 'components/Typography'
import { Input, TextFieldProps } from './Input'
import { InputWrapper } from './TextFieldWrapper'
import { LabelWrapper } from './LabelWrapper'
import { useTextField } from './useTextField.hook'

const TextField: React.FC<TextFieldProps> = (props: TextFieldProps) => {
  const { type, value, label, inputSize, fullWidth } = props
  const { filled, touched, labelWrapperOnClick, onFocus, onBlur, onInput, inputRef } = useTextField(props)

  return (
    <InputWrapper>
      <LabelWrapper {...{ touched, filled, onClick: labelWrapperOnClick }}>
        <Typography variant="label">{label}</Typography>
      </LabelWrapper>
      <Input {...{ type, value, onFocus, onInput, onBlur, ref: inputRef, inputSize, fullWidth }} />
    </InputWrapper>
  )
}

export { TextField }
