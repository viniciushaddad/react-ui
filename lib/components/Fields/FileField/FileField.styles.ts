import styled, { css } from 'styled-components'
import { Card } from 'lib/components/Card'

const Container = styled.div``

const DropZoneStyle = css<{ isDragActive?: boolean }>`
  border-style: dashed;
  border-width: 0.2em;
  background-color: ${({ theme: { palette } }) => palette.grayLighter};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  padding: 2em;
  margin-bottom: 2rem;
  transition: all 277ms ease-in-out;

  ${({ isDragActive, theme: { palette } }) => (isDragActive ? `background-color: ${palette.white};` : '')}
`

const DropZone = styled(Card)`
  ${DropZoneStyle}
`

const Previews = styled.aside`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1em;
`

export { Previews, DropZone, Container }
