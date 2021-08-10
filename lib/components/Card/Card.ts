import { MouseEventHandler } from 'react'
import styled from 'styled-components'
import { cardStyles } from './Card.styles'

export interface CardProps {
  alignment?: 'center' | 'justify' | 'left' | 'right'
  margin?: string[]
  hover?: boolean
  onClick?: MouseEventHandler<HTMLElement>
}

const Card = styled.div<CardProps>`
  ${cardStyles}
`

export { Card }
