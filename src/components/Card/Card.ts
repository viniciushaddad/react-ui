import styled from 'styled-components'
import { cardStyles } from './Card.styles'

export interface CardProps {
  alignment?: 'center' | 'justify' | 'left' | 'right'
}

const Card = styled.div<CardProps>`
  ${cardStyles}
`

export { Card }
