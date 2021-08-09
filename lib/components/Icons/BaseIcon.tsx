import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core'

export interface IconProps {
  size?: SizeProp
  color?: string
}

export interface BaseIconProps extends FontAwesomeIconProps {
  children?: ReactNode
  size?: SizeProp
  color?: string
  icon: IconProp
}

const Wrapper = styled.i`
  line-height: 1.5em;
  display: inline-block;
  color: ${({ color, theme: { palette } }) => (color ? palette[color] : 'inherit')};
`

const BaseIcon = ({ children, ...rest }: BaseIconProps): JSX.Element => (
  <Wrapper>{children ? children : <FontAwesomeIcon {...rest} />}</Wrapper>
)

export { BaseIcon }
