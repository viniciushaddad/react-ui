import { css } from 'styled-components'
import { TextFieldProps } from './Input'

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

    &:focus, &:focus-visible {
      outline: transparent;
      box-shadow: ${palette.grayLight} 0px 5px 15px 0px;
      border-color: ${error ? palette.redWood : palette.grayLight}a8;
  }

    ${error && `border-color: ${palette.redWood};`}
  `}
`

export { inputCss }
