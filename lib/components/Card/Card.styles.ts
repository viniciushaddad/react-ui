import { css } from 'styled-components'
import { CardProps } from './Card'

const cardStyles = css<CardProps>`
  ${({ theme: { palette, card }, alignment }) => `
    border-width: ${card.border.width};
    border-style: ${card.border.style};
    border-radius: ${card.border.radius};
    border-color: ${palette[card.border.color]};
    background-color: ${palette.white};
    ${alignment ? `text-align: ${alignment};` : ''}
    ${card.shadow ? `box-shadow: ${card.shadow};` : ''}
`}

  ${({ theme: { media }, margin }) => {
    const [baseMargin, tabletMargin] = margin || []
    return `
      ${baseMargin && `margin: ${baseMargin}`};
      ${tabletMargin && `${media.tablet} { margin: ${tabletMargin}; }`}
    `
  }}
`

export { cardStyles }
