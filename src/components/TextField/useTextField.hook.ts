import { createRef, useState, RefObject } from 'react'
import { TextFieldProps } from './Input'

interface TextFieldHookProps {
  filled: boolean
  touched: boolean
  labelWrapperOnClick: () => void
  onFocus: () => void
  onBlur: () => void
  onInput: (e: React.FormEvent<HTMLInputElement>) => void
  inputRef: RefObject<HTMLInputElement>
}

const useTextField = ({ onValueChange }: TextFieldProps): TextFieldHookProps => {
  const [touched, setTouched] = useState(false)
  const [filled, setFilled] = useState(false)
  const inputRef = createRef<HTMLInputElement>()

  const onFocus = () => setTouched(true)
  const onBlur = () => setTouched(false)
  const onInput = (e: React.FormEvent<HTMLInputElement>) => {
    setFilled(e.currentTarget.value.length > 0)

    if (onValueChange) onValueChange('value')
  }
  const labelWrapperOnClick = () => inputRef.current?.focus()

  return {
    filled,
    touched,
    labelWrapperOnClick,
    onFocus,
    onBlur,
    onInput,
    inputRef,
  }
}

export { useTextField }
