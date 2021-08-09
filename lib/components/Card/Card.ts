import { MouseEventHandler } from 'react'
import styled from 'styled-components'
import { cardStyles } from './Card.styles'

export interface CardProps {
  alignment?: 'center' | 'justify' | 'left' | 'right'
  margin?: string[]
  onClick?: MouseEventHandler<MouseEvent>
  hover?: boolean
}

const Card = styled.div<CardProps>`
  ${cardStyles}
`

export { Card }
