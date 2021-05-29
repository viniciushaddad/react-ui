import { css } from 'styled-components'
import { CardProps } from './Card'

const cardStyles = css<CardProps>`
  ${({ theme, alignment }) => `
    border: 1px solid ${theme.palette.grayLight};
    border-radius: ${theme.card.border.radius};
    background-color: ${theme.palette.white};
    ${alignment ? `text-align: ${alignment}` : ''};
`}
`

export { cardStyles }
