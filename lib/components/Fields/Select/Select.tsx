import styled, { css } from 'styled-components'
import { inputCss } from '../Input.styles'

const selectCss = css`
  ${inputCss}
`

const Select = styled.select`
  ${selectCss}
`

export { Select }
