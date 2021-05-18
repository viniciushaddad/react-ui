import styled from 'styled-components'
import theme from 'themes/default'

interface ColProps {
  size?: number
  theme: typeof theme
  xs?: 'hide'
  hidden?: boolean
}

const Col = styled.div`
  ${({ theme, size, xs, hidden }: ColProps) => `
  &:not(:last-child) {
    margin-bottom: 1em;
  }
  @media (max-width: ${theme.screen.tablet}px) {
    ${xs === 'hide' && 'display: none;'}
  }
  @media (min-width: ${theme.screen.tablet}px){
    flex: ${size || 1};
    &:not(:last-child) {
      margin: 0;
      margin-right: 2em;
    }
  }
  ${hidden && 'display: none;'}
`}
`

export { Col }
