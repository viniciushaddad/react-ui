import React from 'react'
import { Input, TextFieldProps } from '../Input'
import { InputWrapper } from '../InputWrapper'
import { Label } from '../Label'
import { FieldError } from '../FieldError'
import { useTextField } from './useTextField.hook'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
`

const TextField: React.FC<TextFieldProps> = ({ label, error, mb, ...rest }: TextFieldProps) => {
  const { labelProps, inputProps } = useTextField({ label, error, ...rest })
  return (
    <InputWrapper {...{ mb }}>
      <Container>
        <Label {...labelProps}>{label}</Label>
        <Input {...inputProps} />
      </Container>
      {error && <FieldError text={error} />}
    </InputWrapper>
  )
}

export { TextField }
