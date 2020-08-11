import styled from 'styled-components'

const Row = styled.div`
  display: flex;
  margin-bottom: 2em;
  @media (max-width: ${({ theme }) => theme.screen.tablet}px) {
    margin-bottom: 1em;
    flex-direction: column;
  }
`

export { Row }
