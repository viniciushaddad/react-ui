import styled from 'styled-components'

const Box = styled.div`
  padding: 2em;

  @media (max-width: ${({ theme }) => theme.screen.tablet}px) {
    padding: 1em;
  }
`

export { Box }
