import styled from 'styled-components'
import { BaseButton } from './BaseButton'
import { colorsByFlavor } from './Button.styles'

const InvertedButton = styled(BaseButton)`
  ${({ theme: { palette }, flavor }) => {
    const { font, border, invertedHover } = colorsByFlavor(flavor || 'neutral')

    return `
      background-color: ${palette[font]};
      color: ${palette[border]};
      border-color: ${palette[border]};
      border-style: solid;

      &:hover {
        background-color: ${palette[invertedHover]};
      }
    `
  }}
`

export { InvertedButton }
