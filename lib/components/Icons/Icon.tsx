import { faUserCircle } from '@fortawesome/free-regular-svg-icons'
import React, { FC } from 'react'
import { BaseIcon, IconProps } from './BaseIcon'

const User: FC<IconProps> = (props) => <BaseIcon {...props} icon={faUserCircle} />

export { User }
