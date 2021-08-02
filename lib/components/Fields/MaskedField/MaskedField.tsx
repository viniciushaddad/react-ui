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

const MaskedField = ({ label, error, mb, ...rest }: MaskedFieldProps): JSX.Element => {
  const { labelProps, inputProps, maskedProps } = useMaskedField({ label, error, ...rest })

  return (
    <InputWrapper {...{ mb }}>
      <Container>
        {label && <Label {...labelProps}>{label}</Label>}
        <MaskedTextField
          {...maskedProps}
          guide={false}
          render={(ref, props) => <Input ref={ref} {...props} {...inputProps} />}
        />
      </Container>
      {error && <FieldError text={error} />}
    </InputWrapper>
  )
}

export { MaskedField }
