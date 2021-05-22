import { uniqueId } from 'lodash'
import { createRef, useState, RefObject } from 'react'
import { TextFieldProps } from './Input'

interface TextFieldHookProps {
  filled?: boolean
  touched?: boolean
  onFocus: () => void
  onBlur: () => void
  onInput: (e: React.FormEvent<HTMLInputElement>) => void
  inputRef: RefObject<HTMLInputElement>
  inputId: string
}

const useTextField = ({ value }: TextFieldProps): TextFieldHookProps => {
  const [touched, setTouched] = useState(false)
  const [filled, setFilled] = useState(value ? value.length > 0 : false)
  const inputRef = createRef<HTMLInputElement>()
  const [inputId] = useState(() => uniqueId('input-id'))

  const onFocus = () => setTouched(true)
  const onBlur = () => setTouched(false)
  const onInput = (e: React.FormEvent<HTMLInputElement>) => {
    setFilled(e.currentTarget.value.length > 0)
  }
  return {
    filled,
    touched,
    onFocus,
    onBlur,
    onInput,
    inputRef,
    inputId,
  }
}

export { useTextField }
