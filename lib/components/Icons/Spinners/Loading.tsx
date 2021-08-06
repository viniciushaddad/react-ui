import React from 'react'
import { BaseIcon } from '../BaseIcon'
import { faCircleNotch, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { SizeProp } from '@fortawesome/fontawesome-svg-core'

interface SpinnerProps {
  pulse?: boolean
  color?: string
  size?: SizeProp
}

const Loading: React.FC<SpinnerProps> = ({ pulse, color, size }: SpinnerProps): JSX.Element => {
  const spinner = pulse ? faSpinner : faCircleNotch

  return <BaseIcon icon={spinner} spin pulse={pulse} color={color} size={size} />
}

export { Loading }
