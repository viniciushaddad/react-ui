import React from 'react'
import {
  faExclamationCircle,
  faExclamationTriangle,
  faInfoCircle,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons'
import { faBell, faBellSlash, faFlag } from '@fortawesome/free-regular-svg-icons'
import { BaseIcon, IconProps } from '../BaseIcon'

const Circle: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faExclamationCircle} />
const Triangle: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faExclamationTriangle} />
const Flag: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faFlag} />
const Info: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faInfoCircle} />
const Help: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faQuestionCircle} />
const BellOn: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faBell} />
const BellOff: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faBellSlash} />

export { Circle, Triangle, Flag, Info, Help, BellOn, BellOff }
