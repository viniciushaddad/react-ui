import React, { FC } from 'react'
import styled from 'styled-components'
import * as styles from './Typography.styles'

export type TypographyVariant =
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
  variant?: TypographyVariant
  color?: string
  bordered?: boolean
  htmlFor?: string
  children?: React.ReactNode
  align?: 'left' | 'right' | 'center' | 'justify'
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
  const props = { className, htmlFor }
  return <TypoTag {...props}>{children}</TypoTag>
}

const Typography = styled(DynamicComponent)`
  ${({ theme, variant, bordered, color, align }) => {
    variant = variant || 'body'
    color = color || 'grayDarker'
    return `
      ${align && `text-align: ${align};`}
      cursor: inherit;
      color: ${theme.palette[color]};
      font-family: ${theme.font.family[variant]};
      ${styles[variant]}
      ${bordered && `border-bottom: 1px solid ${theme.palette.grayLight};`}
    `
  }}
`

export { Typography }
