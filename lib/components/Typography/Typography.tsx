import React, { FC } from 'react'
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
  | 'body2'
  | 'button'
  | 'label'

export interface TypographyProps {
  className?: string
  variant?: variant
  color?: string
  bordered?: boolean
  htmlFor?: string
  children?: React.ReactNode
}

const elements = {
  largetitle: 'h1',
  title1: 'h2',
  title2: 'h3',
  title3: 'h4',
  headline: 'h5',
  subhead: 'h6',
  callout: 'p',
  body: 'p',
  body2: 'p',
  footnote: 'p',
  button: 'label',
  label: 'label',
}

const DynamicComponent: React.FC<TypographyProps> = ({ variant, children, className, htmlFor }: TypographyProps) => {
  const TypoTag = elements[variant || 'body'] as keyof JSX.IntrinsicElements
  return <TypoTag {...{ className, htmlFor }}>{children}</TypoTag>
}

const Typography = styled(DynamicComponent)`
  ${({ theme, variant, bordered, color }) => {
    variant = variant || 'body'
    color = color || 'grayDarker'
    return `
      cursor: inherit;
      color: ${theme.palette[color]};
      font-family: ${theme.font.family[variant]};
      ${styles[variant]}
      ${bordered && `border-bottom: 1px solid ${theme.palette.grayLight};`}
    `
  }}
`

export { Typography }
