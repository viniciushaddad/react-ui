import styled, { css } from 'styled-components'
import { Typography } from 'lib/components/Typography'
import { TypographyVariant } from 'lib/components/Typography/Typography'
import { InputSizes } from '../Input'

export type LabelProps = {
  htmlFor: string
  variant: TypographyVariant
  touched?: boolean
  filled?: boolean
  inputSize?: InputSizes
  error?: string
}

const labelSizes = {
  md: `font-size: 1em;`,
  xs: `font-size: 0.85em;`,
  lg: `font-size: 1.5em;`,
  touched: {
    md: `font-size: 0.9em;`,
    xs: `font-size: 0.8em;`,
    lg: `font-size: 1em;`,
  },
}
const Styles = css<LabelProps>`
  ${({ inputSize, touched, filled, error, theme }) => `
  ${labelSizes[inputSize || 'md']}
  color: ${theme.palette.grayDark};
  position: absolute;
  left: ${inputSize != 'lg' ? '1em' : '1.5em'};
  top: 50%;
  margin-top: -0.5em;
  transition: all 0.1s ease-in-out;
  ${
    touched || filled
      ? `
      background-color: ${theme.palette.white};
      ${labelSizes.touched[inputSize || 'md']}
      padding: 0 0.25em;
      margin-left: -0.25em;
      top: 0;
  `
      : ''
  }
  ${error ? `color: ${theme.palette.redWood}` : ''};
`}
`

const Label = styled(Typography)`
  ${Styles}
`

export { Label }
