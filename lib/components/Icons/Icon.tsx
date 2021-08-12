import { faUserCircle } from '@fortawesome/free-regular-svg-icons'
import { faShippingFast } from '@fortawesome/free-solid-svg-icons'
import React, { FC } from 'react'
import { BaseIcon, IconProps } from './BaseIcon'

const User: FC<IconProps> = (props) => <BaseIcon {...props} icon={faUserCircle} />
const ShippingFast: FC<IconProps> = (props) => <BaseIcon {...props} icon={faShippingFast} />

export { User, ShippingFast }
