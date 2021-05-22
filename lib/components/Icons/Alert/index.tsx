import React from 'react'
import {
  faExclamationCircle,
  faExclamationTriangle,
  faInfoCircle,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons'
import { faFlag } from '@fortawesome/free-regular-svg-icons'
import { BaseIcon, IconProps } from '../BaseIcon'

const AlertCircle: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faExclamationCircle} />
const AlertTriangle: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faExclamationTriangle} />
const Flag: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faFlag} />
const Info: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faInfoCircle} />
const Help: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faQuestionCircle} />

export { AlertCircle, AlertTriangle, Flag, Info, Help }
