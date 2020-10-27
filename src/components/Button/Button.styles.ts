import { css } from 'styled-components'
import { ButtonProps } from './Button'

const paddings = {
  xs: '0.5em 1.5em',
  md: '0.5em 1.5em',
  lg: '0.5em 1.5em',
}
const fontSizes = {
  xs: '0.75em',
  md: '1em',
  lg: '1.25em',
}

const ButtonStyles = css<ButtonProps>`
  ${({ theme: { button }, size }) => {
    return `
      padding: ${paddings[size || 'md']};
      font-size: ${fontSizes[size || 'md']};
      border-style: ${button.border.style};
      border-width: ${button.border.width};
      border-radius: ${button.border.radius};
    `
  }}
`

export { ButtonStyles }
