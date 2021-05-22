import styled from 'styled-components'

interface RowProps {
  fullHeight?: boolean
}

const Row = styled.div`
  display: flex;
  margin-bottom: 2em;
  ${({ theme }) => theme.media.tablet} {
    margin-bottom: 1em;
    flex-direction: column;
  }
  ${({ fullHeight }: RowProps) => fullHeight && `width: 100vw; height: 100vh;`}
`

export { Row }
