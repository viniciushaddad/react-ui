import React from 'react'
import { bool, string } from 'prop-types'
import { BaseIcon } from '../BaseIcon'
import { faCircleNotch, faSpinner } from '@fortawesome/free-solid-svg-icons'

interface SpinnerProps {
  pulse?: boolean
  color?: string
}

const Loading: React.FC<SpinnerProps> = ({ pulse, color }): JSX.Element => {
  const spinner = pulse ? faSpinner : faCircleNotch

  return <BaseIcon icon={spinner} spin pulse={pulse} color={color} />
}

Loading.propTypes = {
  pulse: bool,
  color: string,
}

export { Loading }
