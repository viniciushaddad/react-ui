import styled from 'styled-components'

const button = styled.button`
  padding: 0.5em 1.5em;
  font-size: 1em;

  ${({ theme: { button } }) => `
    brackground-color: ${button.neutral.bg}
    color: ${button.neutral.color}
  `}
`

export { button }
