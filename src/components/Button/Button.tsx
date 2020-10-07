import styled from 'styled-components'
import { Typography } from 'components/Typography'
import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'

const StyledButton = styled.button<ButtonProps>`
  padding: 0.5em 1.5em;
  font-size: 1em;

  ${({ theme: { button }, primary, success, info, warning, negative, borderLess }) => `
    brackground-color: ${button.neutral.bg};
    color: ${button.neutral.color};
  `}
`

export interface ButtonProps {
  children: ReactNode
  primary?: boolean
  success?: boolean
  info?: boolean
  warning?: boolean
  negative?: boolean
  borderLess?: boolean
}

const Button: React.FC<ButtonProps> = ({ children }): JSX.Element => (
  <StyledButton>
    <Typography variant="label">{children}</Typography>
  </StyledButton>
)

Button.propTypes = {
  children: PropTypes.node,
  primary: PropTypes.bool,
  success: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  negative: PropTypes.bool,
  borderLess: PropTypes.bool,
}

export { Button }
