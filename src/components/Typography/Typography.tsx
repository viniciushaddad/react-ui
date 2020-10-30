import React, { FC, Attributes } from 'react'
import styled from 'styled-components'
import * as styles from './Typography.styles'

type variant =
  | 'largetitle'
  | 'title1'
  | 'title2'
  | 'title3'
  | 'headline'
  | 'body'
  | 'callout'
  | 'subhead'
  | 'footnote'
  | 'caption'
  | 'subcaption'
  | 'label'

interface TypographyProps extends Attributes {
  variant?: variant
  color?: string
  bordered?: boolean
  children?: React.ReactNode
}

const elements = {
  largetitle: 'h1',
  title1: 'h2',
  title2: 'h3',
  title3: 'h4',
  headline: 'h5',
  body: 'p',
  callout: 'p',
  subhead: 'h6',
  footnote: 'p',
  caption: 'caption',
  subcaption: 'caption',
  label: 'label',
}

const DynamicComponent: React.FC<TypographyProps> = ({ variant, children, bordered, ...props }: TypographyProps) => {
  const TypoTag = elements[variant || 'body'] as keyof JSX.IntrinsicElements
  return <TypoTag {...props}>{children}</TypoTag>
}

const Typography = styled(DynamicComponent)`
  ${({ theme, variant, bordered, color }) => {
    variant = variant || 'body'
    color = color || 'grayDarker'
    return `
      color: ${theme.palette[color]};
      font-family: ${theme.font.family[variant]};
      ${styles[variant]}
      ${bordered && `border-bottom: 1px solid ${theme.palette.grayLight}`}
    `
  }}
`

export { Typography }
