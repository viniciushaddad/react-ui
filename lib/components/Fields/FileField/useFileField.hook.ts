import { without } from 'lodash'
import { useEffect, useState } from 'react'
import { useDropzone, DropzoneOptions, DropzoneInputProps, DropzoneRootProps } from 'react-dropzone'

type FileState = { preview: string; file: File; id: string }
export interface FileFieldProps extends DropzoneOptions {
  files?: FileState[]
  name: string
  error?: string
  onChange?: (files: FileState[]) => void
  onFilesAdd?: (files: { file: File }[]) => void
  onFilesRemove?: (file: FileState[]) => void
}
type FileFieldHook = {
  files: FileState[]
  dropzoneProps: { isDragActive: boolean; isFocused: boolean } & DropzoneRootProps
  inputProps: { name: string } & DropzoneInputProps
  removeFile: (file: FileState) => void
}

const useFileField = ({
  files: _files,
  name,
  onChange,
  onFilesRemove,
  onFilesAdd,
  ...rest
}: FileFieldProps): FileFieldHook => {
  const addPreview = ({ file, ...rest }: FileState) => ({ ...rest, file, preview: URL.createObjectURL(file) })

  const [files, setFiles] = useState((_files || []).map(addPreview))
  const removeFile = (file: FileState) => {
    onFilesRemove && onFilesRemove([file])
    URL.revokeObjectURL(file.preview)
    setFiles(without(files, file))
  }
  const onDrop = (acceptedFiles: File[]) => {
    const withMissingPropeties = (file: File) => ({ file, id: '', preview: '' })
    onFilesAdd && onFilesAdd(acceptedFiles.map((file) => ({ file })))
    setFiles([...files, ...acceptedFiles.map(withMissingPropeties)].map(addPreview))
  }
  const { getRootProps, getInputProps, isDragActive, isFocused } = useDropzone({ onDrop, ...rest })
  const dropzoneProps = { ...getRootProps(), isDragActive, isFocused }
  const inputProps = { ...getInputProps(), name }

  useEffect(() => onChange && onChange(files), [files])
  useEffect(() => () => files.forEach(({ preview }) => URL.revokeObjectURL(preview)), [])

  return { files, removeFile, dropzoneProps, inputProps }
}

export { useFileField }
