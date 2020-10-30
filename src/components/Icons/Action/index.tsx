import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheck,
  faDownload,
  faLock,
  faLockOpen,
  faPencilAlt,
  faPlus,
  faSave,
  faTimes,
  faToggleOff,
  faToggleOn,
  faBookmark as faBookmarkOn,
} from '@fortawesome/free-solid-svg-icons'
import { faBookmark, faCopy, faEye, faEyeSlash, faTrashAlt } from '@fortawesome/free-regular-svg-icons'

const Add = (): JSX.Element => <FontAwesomeIcon icon={faPlus} />
const Edit = (): JSX.Element => <FontAwesomeIcon icon={faPencilAlt} />
const Delete = (): JSX.Element => <FontAwesomeIcon icon={faTrashAlt} />
const Show = (): JSX.Element => <FontAwesomeIcon icon={faEye} />
const Hide = (): JSX.Element => <FontAwesomeIcon icon={faEyeSlash} />
const Copy = (): JSX.Element => <FontAwesomeIcon icon={faCopy} />
const Download = (): JSX.Element => <FontAwesomeIcon icon={faDownload} />
const Save = (): JSX.Element => <FontAwesomeIcon icon={faSave} />
const Lock = (): JSX.Element => <FontAwesomeIcon icon={faLock} />
const Unlock = (): JSX.Element => <FontAwesomeIcon icon={faLockOpen} />
const Close = (): JSX.Element => <FontAwesomeIcon icon={faTimes} />
const Check = (): JSX.Element => <FontAwesomeIcon icon={faCheck} />
const BookmarkOff = (): JSX.Element => <FontAwesomeIcon icon={faBookmark} />
const BookmarkOn = (): JSX.Element => <FontAwesomeIcon icon={faBookmarkOn} />
const ToggleOn = (): JSX.Element => <FontAwesomeIcon icon={faToggleOn} />
const ToggleOff = (): JSX.Element => <FontAwesomeIcon icon={faToggleOff} />

export {
  Add,
  Delete,
  Edit,
  Show,
  Hide,
  Copy,
  Download,
  Save,
  Lock,
  Unlock,
  Close,
  Check,
  BookmarkOn,
  BookmarkOff,
  ToggleOn,
  ToggleOff,
}
