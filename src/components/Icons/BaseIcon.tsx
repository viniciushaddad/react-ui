import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SizeProp } from '@fortawesome/fontawesome-svg-core'

export interface IconProps {
  size?: SizeProp
  color?: string
}

const BaseIcon = styled(FontAwesomeIcon)`
  color: ${({ color, theme: { palette } }) => palette[color || 'grayDark']};
`

export { BaseIcon }
