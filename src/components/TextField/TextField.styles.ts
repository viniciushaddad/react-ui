import { css } from 'styled-components'
import { TextFieldProps, InputSizes } from './Input'

const inputWrapperCss = css`
  position: relative;
`

const textFieldWrapperCss = css`
  margin-bottom: 1.5em;
`

const labelSizes = {
  md: `fons-size: 1em;`,
  xs: `font-size: 0.85em;`,
  lg: `font-size: 1.5em;`,
  touched: {
    md: `font-size: 0.9em;`,
    xs: `font-size: 0.8em;`,
    lg: `font-size: 1em;`,
  },
}

const inputLabelCss = css<{ touched?: boolean; filled?: boolean; inputSize?: InputSizes; error?: string }>`
  ${({ inputSize }) => labelSizes[inputSize || 'md']}
  position: absolute;
  left: 1em;
  top: 50%;
  margin-top: -0.66em;
  transition: all 0.1s ease-in-out;
  ${({ touched, filled, theme, inputSize }) =>
    (touched || filled) &&
    `
      background-color: ${theme.palette.white};
      ${labelSizes.touched[inputSize || 'md']}
      padding: 0 0.25em;
      margin-left: -0.25em;
      top: 0;
  `}
  ${({ error }) => error && textFieldErrorCss}
`

const inputSizes = {
  md: `
    font-size: 1em;
    line-height: 1.5em;
    padding: .5em 1em;
  `,
  xs: `
    font-size: .85em;
    line-height: 1.2em;
    padding: .5em .85em;
  `,
  lg: `
    font-size: 1.5em;
    line-height: 1em;
    padding: .8em 1.5em;
  `,
}

const inputCss = css<TextFieldProps>`
  ${({ theme: { input, palette }, fullWidth, inputSize, error }) => `
    border-width: 0;
    border-radius: ${input.border.radius};
    border-style: ${input.border.style};
    border-width: ${input.border.width};
    border-color: ${palette.grayLight};
    ${fullWidth ? 'width: 100%;' : ''}
    ${inputSizes[inputSize || 'md']}
    ${error && `border-color: ${palette.redWood};`}
  `}
`

const textFieldErrorCss = css`
  color: ${({ theme }) => theme.palette.redWood};
`

export { inputWrapperCss, inputCss, inputLabelCss, textFieldErrorCss, textFieldWrapperCss }
