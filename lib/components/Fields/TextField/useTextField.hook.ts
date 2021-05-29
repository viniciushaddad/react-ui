import { TypographyVariant } from 'lib/components/Typography/Typography'
import { uniqueId } from 'lodash'
import { createRef, useState, RefObject, useEffect } from 'react'
import { InputSizes, TextFieldProps } from '../Input'
import { LabelProps } from '../Label/Label'

type InputProps = {
  id: string
  ref: RefObject<HTMLInputElement>
  onFocus: () => void
  onBlur: () => void
  onInput: (e: React.FormEvent<HTMLInputElement>) => void
  error?: string
  inputSize?: InputSizes
}

interface TextFieldHookProps {
  labelProps: LabelProps
  inputProps: TextFieldProps & InputProps
}

const useTextField = ({ value, inputSize, error, ...rest }: TextFieldProps): TextFieldHookProps => {
  const [touched, setTouched] = useState(false)
  const [filled, setFilled] = useState(value ? value.length > 0 : false)
  const inputRef = createRef<HTMLInputElement>()
  const inputId = uniqueId('input-id')

  const onFocus = () => setTouched(true)
  const onBlur = () => setTouched(false)
  const onInput = (e: React.FormEvent<HTMLInputElement>) => {
    setFilled(e.currentTarget.value.length > 0)
  }
  useEffect(() => {
    setFilled(value ? value.length > 0 : false)
  }, [value])

  const labelProps = { htmlFor: inputId, variant: 'label' as TypographyVariant, touched, filled, inputSize, error }
  const inputProps = { ...rest, id: inputId, ref: inputRef, value, onFocus, onInput, onBlur, error, inputSize }
  return {
    labelProps,
    inputProps,
  }
}

export { useTextField }
