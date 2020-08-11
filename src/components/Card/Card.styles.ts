import { css } from 'styled-components'

const cardStyles = css`
  ${({ theme }) => `
    border: 1px solid ${theme.palette.grayLight};
    border-radius: ${theme.card.border.radius};
    background-color: ${theme.palette.white};
    margin-bottom: 1em;
`}
`

export { cardStyles }
