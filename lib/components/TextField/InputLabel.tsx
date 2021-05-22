import styled, { StyledComponent } from 'styled-components'
import { inputLabelCss } from './TextField.styles'
import { Typography } from '../Typography'
import { InputSizes } from './Input'

interface InputLabelProps {
  touched?: boolean
  filled?: boolean
  inputSize?: InputSizes
  error?: boolean
}

const InputLabel: StyledComponent<typeof Typography, InputLabelProps> = styled(Typography)`
  ${inputLabelCss}
`

export { InputLabel }
