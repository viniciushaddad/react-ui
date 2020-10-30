import { Typography } from 'components/Typography'
import React, { ReactElement, ReactNode } from 'react'
import PropTypes from 'prop-types'
import { colorsByFlavor } from './Button.styles'
import { Loading } from 'components/Icons/Spinners'
import { PrimaryButton } from './PrimaryButton'
import { InvertedButton } from './InvertedButton'
import { BorderlessButton } from './BorderlessButton'

export interface ButtonProps {
  children: ReactNode
  size?: ButtonSizes
  variant?: ButtonVariant
  flavor?: ButtonFlavor
  preIcon?: ReactElement
  endIcon?: ReactElement
  loading?: boolean
}

export type ButtonSizes = 'md' | 'xs' | 'lg'
export type ButtonVariant = 'primary' | 'inverted' | 'borderless'
export type ButtonFlavor = 'positive' | 'info' | 'warning' | 'negative' | 'neutral'

const variants = {
  primary: PrimaryButton,
  inverted: InvertedButton,
  borderless: BorderlessButton,
}

const Button: React.FC<ButtonProps> = ({ children, variant, flavor, size, preIcon, endIcon, loading }): JSX.Element => {
  const Button = variants[variant || 'primary']
  const { font, border } = colorsByFlavor(flavor || 'neutral')
  const inverted = variant === 'inverted'
  const color = inverted ? border : font
  const PreIconWithColour = preIcon && React.cloneElement(preIcon, { color })
  const EndIconWithColour = endIcon && React.cloneElement(endIcon, { color })

  return (
    <Button {...{ variant, flavor, size, preIcon, endIcon }}>
      {loading ? (
        <Loading {...{ color }} />
      ) : (
        <>
          {PreIconWithColour}
          <Typography variant="label" {...{ color }}>
            {children}
          </Typography>
          {EndIconWithColour}
        </>
      )}
    </Button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  preIcon: PropTypes.element,
  endIcon: PropTypes.element,
  loading: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'inverted', 'borderless']),
  size: PropTypes.oneOf(['xs', 'md', 'lg']),
  flavor: PropTypes.oneOf(['positive', 'info', 'warning', 'negative', 'neutral']),
}

export { Button }
