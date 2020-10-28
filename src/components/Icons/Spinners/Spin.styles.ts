import { css, keyframes } from 'styled-components'

const SpinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const InfiniteSpin = css<{ duration: number }>`
  animation: ${SpinAnimation} ${({ duration }) => duration}s linear infinite;
`

const StepSpin = css<{ duration: number; step: number }>`
  animation: ${SpinAnimation} ${({ duration }) => duration}s steps(${({ step }) => step}) infinite;
`

export { InfiniteSpin, StepSpin }
