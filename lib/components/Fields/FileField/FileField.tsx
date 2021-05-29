import React from 'react'
import { Action } from 'lib/components/Icons'
import { Typography } from 'lib/components/Typography'
import { Thumb } from './Thumb'
import { Container, DropZone, Previews } from './FileField.styles'
import { FileFieldProps, useFileField } from './useFileField.hook'
import { isEmpty } from 'lodash'

const FileField = (props: FileFieldProps): JSX.Element => {
  const { files, dropzoneProps, inputProps, removeFile } = useFileField(props)

  return (
    <Container>
      <DropZone {...dropzoneProps}>
        <input {...inputProps} />
        <Action.Upload size="5x" />
        <Typography>
          <strong>Drag</strong> your files here or <strong>click</strong> to select!
        </Typography>
      </DropZone>
      {!isEmpty(files) && (
        <Previews>
          {files.map((file, idx) => (
            <Thumb key={idx} src={file.preview} onRemoveClick={() => removeFile(file)} />
          ))}
        </Previews>
      )}
    </Container>
  )
}

export { FileField }
