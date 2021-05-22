import { TypographyVariant } from 'lib/components/Typography/Typography'
import { uniqueId } from 'lodash'
import { RefObject, useState } from 'react'
import { InputSizes, TextFieldProps } from '../Input'
import { LabelProps } from '../Label/Label'

export type InputProps = {
  id: string
  onFocus: () => void
  onBlur: () => void
  onInput: (e: React.FormEvent<HTMLInputElement>) => void
  error?: string
  inputSize?: InputSizes
}
type MaskArray = Array<string | RegExp> | boolean
interface MaskedFieldHookProps {
  labelProps: LabelProps
  inputProps: TextFieldProps & InputProps
  maskedProps: { mask: MaskArray; id: string }
}

export interface MaskedFieldProps extends TextFieldProps {
  mask: Array<string | RegExp> | boolean
  render?: (ref: RefObject<HTMLInputElement>, props: InputProps) => JSX.Element
}

const useMaskedField = ({ value, inputSize, error, mask, ...rest }: MaskedFieldProps): MaskedFieldHookProps => {
  const [touched, setTouched] = useState(false)
  const [filled, setFilled] = useState(value ? value.length > 0 : false)
  const [inputId] = useState(() => uniqueId('input-id'))

  const onFocus = () => setTouched(true)
  const onBlur = () => setTouched(false)
  const onInput = (e: React.FormEvent<HTMLInputElement>) => {
    setFilled(e.currentTarget.value.length > 0)
  }

  const labelProps = { htmlFor: inputId, variant: 'label' as TypographyVariant, touched, filled, inputSize, error }
  const inputProps = { ...rest, id: inputId, onFocus, onInput, onBlur, error, inputSize }
  const maskedProps = { mask, id: inputId }
  return {
    inputProps,
    labelProps,
    maskedProps,
  }
}

export { useMaskedField }
