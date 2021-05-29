import { without } from 'lodash'
import { useEffect, useState } from 'react'
import { useDropzone, DropzoneOptions, DropzoneInputProps, DropzoneRootProps } from 'react-dropzone'

type FileState = { preview: string; file: File }
export interface FileFieldProps extends DropzoneOptions {
  files?: File[]
  name: string
  error?: string
  onChange?: (files: FileState[]) => void
}
type FileFieldHook = {
  files: FileState[]
  dropzoneProps: { isDragActive: boolean; isFocused: boolean } & DropzoneRootProps
  inputProps: { name: string } & DropzoneInputProps
  removeFile: (file: FileState) => void
}

const useFileField = ({ files: _files, name, onChange }: FileFieldProps): FileFieldHook => {
  const addPreview = (file: File) => ({ file, preview: URL.createObjectURL(file) })
  const [files, setFiles] = useState((_files || []).map(addPreview))
  const removeFile = (file: FileState) => {
    setFiles(without(files, file))
    URL.revokeObjectURL(file.preview)
  }
  const onDrop = (acceptedFiles: File[]) => setFiles([...files.map((f) => f.file), ...acceptedFiles].map(addPreview))
  const { getRootProps, getInputProps, isDragActive, isFocused } = useDropzone({ onDrop })
  const dropzoneProps = { ...getRootProps(), isDragActive, isFocused }
  const inputProps = { ...getInputProps(), name }

  useEffect(() => () => files.forEach(({ preview }) => URL.revokeObjectURL(preview)), [])
  useEffect(() => onChange && onChange(files), [files])

  return { files, removeFile, dropzoneProps, inputProps }
}

export { useFileField }
