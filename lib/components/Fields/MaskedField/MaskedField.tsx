import React from 'react'
import MaskedTextField from 'react-text-mask'
import styled from 'styled-components'
import { InputWrapper } from '../InputWrapper'
import { Label } from '../Label'
import { FieldError } from '../FieldError'
import { useMaskedField, MaskedFieldProps } from './useMaskedField.hook'
import { Input } from '../Input'

const Container = styled.div`
  position: relative;
`
type Ref = (e: HTMLElement) => void
const MaskedField = ({ label, error, ...rest }: MaskedFieldProps): JSX.Element => {
  const { labelProps, inputProps, maskedProps } = useMaskedField({ label, error, ...rest })
  return (
    <InputWrapper>
      <Container>
        <Label {...labelProps}>{label}</Label>
        <MaskedTextField {...maskedProps} render={(ref, props) => <Input ref={ref} {...inputProps} {...props} />} />
      </Container>
      {error && <FieldError text={error} />}
    </InputWrapper>
  )
}

export { MaskedField }
