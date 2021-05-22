import styled from 'styled-components'

interface RowProps {
  fullHeight?: boolean
}

const Row = styled.div`
  display: flex;
  margin-bottom: 2em;
  @media (max-width: ${({ theme }) => theme.screen.tablet}px) {
    margin-bottom: 1em;
    flex-direction: column;
  }
  ${({ fullHeight }: RowProps) => fullHeight && `width: 100vw; height: 100vh;`}
`

export { Row }
