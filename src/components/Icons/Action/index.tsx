import React from 'react'

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
import { BaseIcon, IconProps } from '../BaseIcon'

const Add: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faPlus} />
const Edit: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faPencilAlt} />
const Delete: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faTrashAlt} />
const Show: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faEye} />
const Hide: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faEyeSlash} />
const Copy: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faCopy} />
const Download: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faDownload} />
const Save: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faSave} />
const Lock: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faLock} />
const Unlock: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faLockOpen} />
const Close: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faTimes} />
const Check: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faCheck} />
const BookmarkOff: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faBookmark} />
const BookmarkOn: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faBookmarkOn} />
const ToggleOn: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faToggleOn} />
const ToggleOff: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faToggleOff} />

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
