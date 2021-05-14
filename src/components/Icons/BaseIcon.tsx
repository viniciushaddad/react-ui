import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { SizeProp } from '@fortawesome/fontawesome-svg-core'

export interface IconProps {
  size?: SizeProp
  color?: string
}

export interface BaseIconProps extends FontAwesomeIconProps {
  size?: SizeProp
  color?: string
}

const Icon = styled(FontAwesomeIcon)`
  width: 100%;
  height: 100%;
  color: ${({ color, theme: { palette } }) => palette[color || 'grayDark']};
`
const Wrapper = styled.i`
  line-height: 1.5em;
`

const BaseIcon: React.FC<BaseIconProps> = (props) => (
  <Wrapper>
    <Icon {...props} />
  </Wrapper>
)

export { BaseIcon }
