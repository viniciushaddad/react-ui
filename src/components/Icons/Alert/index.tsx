import React from 'react'
import {
  faExclamationCircle,
  faExclamationTriangle,
  faInfoCircle,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag } from '@fortawesome/free-regular-svg-icons'

const AlertCircle = (): JSX.Element => <FontAwesomeIcon icon={faExclamationCircle} />
const AlertTriangle = (): JSX.Element => <FontAwesomeIcon icon={faExclamationTriangle} />
const Flag = (): JSX.Element => <FontAwesomeIcon icon={faFlag} />
const Info = (): JSX.Element => <FontAwesomeIcon icon={faInfoCircle} />
const Help = (): JSX.Element => <FontAwesomeIcon icon={faQuestionCircle} />

export { AlertCircle, AlertTriangle, Flag, Info, Help }
