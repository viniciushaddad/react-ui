import styled from 'styled-components'

const InputWrapper = styled.div<{ mb?: string }>`
  margin-bottom: ${({ mb }) => mb || '1.5em'};
`

export { InputWrapper }
