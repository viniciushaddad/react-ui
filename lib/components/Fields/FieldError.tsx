import styled from 'styled-components'
import { Typography } from '../Typography'

const FieldError = styled(Typography)`
  color: ${({ theme }) => theme.palette.redWood};
`

export { FieldError }
