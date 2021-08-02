import styled from 'styled-components'

interface RowProps {
  noGap?: boolean
  fullHeight?: boolean
}

const Row = styled.div`
  display: flex;
  gap: 2em;
  &:not(:last-child) {
    margin-bottom: 2em;
  }
  ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
    gap: 1.5em;
    &:not(:last-child) {
      margin-bottom: 1.5em;
    }
  }
  ${({ fullHeight }: RowProps) => fullHeight && `width: 100vw; height: 100vh;`}
  ${({ noGap }: RowProps) => noGap && 'gap: 0;'}
`

export { Row }
