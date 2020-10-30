import styled from 'styled-components'

interface BoxProps {
  padding?: string[]
  alignment?: 'center' | 'justify' | 'left' | 'right'
}

const Box = styled.div<BoxProps>`
  ${({ padding, theme }) => {
    padding = padding || []

    return `
      padding: ${padding[0] || '2em'};

      @media (max-width: ${theme.screen.tablet}px) {
        padding: ${padding[1] || '1em'};
      }
    `
  }}

  ${({ alignment }) => alignment && `text-align: ${alignment}`}
`

export { Box }
