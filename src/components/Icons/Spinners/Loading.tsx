import React from 'react'
import styled from 'styled-components'
import { oneOf } from 'prop-types'
import { InfiniteSpin, StepSpin } from './Spin.styles'
import { SpinnerStyle } from './Loading.styles'

interface SpinnerProps {
  variant?: 'spin' | 'pulse'
}

const Spinner = styled.img`
  ${SpinnerStyle}
`

const InfiniteSpinner = styled(Spinner)<{ duration: number }>`
  ${InfiniteSpin}
`

const StepSpinner = styled(Spinner)<{ duration: number; step: number }>`
  ${StepSpin}
`

const Loading: React.FC<SpinnerProps> = ({ variant }): JSX.Element => {
  switch (variant) {
    case 'pulse':
      return <StepSpinner src="images/spinners/circles.png" step={11} duration={2} />
    default:
      return <InfiniteSpinner src="images/spinners/circles.png" duration={2} />
  }
}

Loading.propTypes = {
  variant: oneOf(['pulse', 'spin']),
}

export { Loading }
