import { Action } from 'lib/components/Icons'
import React, { useState } from 'react'
import styled from 'styled-components'

const ThumbWrapper = styled.div`
  border: 1px solid ${({ theme: { palette } }) => palette.grayLight};
  border-radius: 0.25rem;
  background-color: ${({ theme: { palette } }) => palette.white};
  padding: 0.25rem;
  position: relative;
`

const ThumbClose = styled.button<{ hovering?: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -2.5em;
  margin-top: -2.5em;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5em;
  z-index: 1;
`

const ThumbCrop = styled.div<{ hovering: boolean }>`
  min-height: 5em;
  max-height: 10em;
  max-width: 10em;
  overflow: hidden;
  transition: all 277ms;

  ${({ hovering }) => hovering && 'opacity: 0.33;'}
`

const ThumbImage = styled.img`
  height: 100%;
  width: auto;
`
type ThumbProps = { src: string; onRemoveClick: () => unknown }

const Thumb = ({ src, onRemoveClick }: ThumbProps): JSX.Element => {
  const [hovering, setHovering] = useState(false)
  const onMouseEnter = () => setHovering(true)
  const onMouseLeave = () => setHovering(false)

  return (
    <ThumbWrapper {...{ onMouseEnter, onMouseLeave }}>
      {hovering && (
        <ThumbClose onClick={onRemoveClick}>
          <Action.Delete size="5x" color="grayDarker" />
        </ThumbClose>
      )}
      <ThumbCrop hovering={hovering}>
        <ThumbImage src={src} />
      </ThumbCrop>
    </ThumbWrapper>
  )
}

export { Thumb }
