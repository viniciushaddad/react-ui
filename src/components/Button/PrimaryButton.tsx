import styled from 'styled-components'
import { BaseButton } from './BaseButton'
import { colorsByFlavor } from './Button.styles'

const PrimaryButton = styled(BaseButton)`
  ${({ theme: { palette }, flavor }) => {
    const { font, bg, border } = colorsByFlavor(flavor || 'neutral')

    return `
      background-color: ${palette[bg]};
      color: ${palette[font]};
      border-color: ${palette[border]};
    `
  }}
`

export { PrimaryButton }
