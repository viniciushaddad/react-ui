import { css } from 'styled-components'
import { TextFieldProps } from './Input'

const inputWrapperCss = css`
  margin-bottom: 1.5em;
  position: relative;
`

const labelWrapperCss = css<{ touched?: boolean; filled?: boolean }>`
  font-family: ${({ theme }) => theme.font.family.label};
  font-weight: bold;
  position: absolute;
  left: 1em;
  top: 50%;
  margin-top: -0.66em;
  transition: all 0.2s ease-in-out;
  ${({ touched, filled, theme }) =>
    (touched || filled) &&
    `
      background-color: ${theme.palette.white};
      font-size: 0.8em;
      padding: 0 0.25em;
      margin-left: -0.25em;
      top: 0;
  `}
`

const inputSizes = {
  md: `
    font-size: 1em;
    line-height: 1.5em;
    padding: .5em 1em;
  `,
  xs: `
    font-size: .8em;
    line-height: 1.2em;
    padding: .3em .8em;
  `,
  lg: `
    font-size: 1.5em;
    line-height: 2.25em;
    padding: .8em 1.5em;
  `,
}

const inputCss = css<TextFieldProps>`
  ${({ theme: { input, palette }, fullWidth, inputSize }) => `
    border-width: 0;
    border-radius: ${input.border.radius};
    border-style: ${input.border.style};
    border-width: ${input.border.width};
    border-color: ${palette.grayLight};
    ${fullWidth ? 'width: 100%;' : ''}
    ${inputSizes[inputSize || 'md']}
  `}
`

export { inputWrapperCss, inputCss, labelWrapperCss }
