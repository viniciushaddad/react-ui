import { uniqueId } from 'lodash'
import { createRef, useState, RefObject } from 'react'
import { TextFieldProps } from './Input'

interface TextFieldHookProps {
  filled?: boolean
  touched?: boolean
  inputValue: string
  labelOnClick: () => void
  onFocus: () => void
  onBlur: () => void
  onInput: (e: React.FormEvent<HTMLInputElement>) => void
  inputRef: RefObject<HTMLInputElement>
  inputId: string
}

const useTextField = ({ value, onValueChange }: TextFieldProps): TextFieldHookProps => {
  const [inputValue, setInputValue] = useState(value || '')
  const [touched, setTouched] = useState(false)
  const [filled, setFilled] = useState(inputValue.length > 0)
  const inputRef = createRef<HTMLInputElement>()
  const [inputId] = useState(() => uniqueId('input-id'))

  const onFocus = () => setTouched(true)
  const onBlur = () => setTouched(false)
  const onInput = (e: React.FormEvent<HTMLInputElement>) => {
    setFilled(e.currentTarget.value.length > 0)
    setInputValue(e.currentTarget.value)

    if (onValueChange) onValueChange('value')
  }
  const labelOnClick = () => inputRef.current?.focus()

  return {
    filled,
    touched,
    inputValue,
    labelOnClick,
    onFocus,
    onBlur,
    onInput,
    inputRef,
    inputId,
  }
}

export { useTextField }
