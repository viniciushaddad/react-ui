import styled from 'styled-components'

interface BoxProps {
  padding?: string[]
  alignment?: 'center' | 'justify' | 'left' | 'right'
  inline?: boolean
}

const Box = styled.div<BoxProps>`
  ${({ padding, theme }) => {
    padding = padding || []

    return `
      padding: ${padding[0] || '2em'};

      ${theme.media.tablet} {
        padding: ${padding[1] || '1em'};
      }
    `
  }}

  ${({ alignment }) => alignment && `text-align: ${alignment};s`}
  ${({ inline }) => inline && `display: inline;`}
`

export { Box }
