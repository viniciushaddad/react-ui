import styled from 'styled-components'
import theme from '../../themes/default'

interface ColProps {
  theme: typeof theme
  size?: number
  xs?: 'hide'
  hidden?: boolean
}

const Col = styled.div<ColProps>`
  ${({ theme, size, xs, hidden }) => `
  &:not(:last-child) {
    margin-bottom: 1em;
  }
  ${theme.media.tablet} {
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
