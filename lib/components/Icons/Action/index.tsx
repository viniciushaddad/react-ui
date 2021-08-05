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
  faHeart as unlike,
} from '@fortawesome/free-solid-svg-icons'
import { faBookmark, faCopy, faEye, faEyeSlash, faTrashAlt, faHeart as like } from '@fortawesome/free-regular-svg-icons'
import { BaseIcon, IconProps } from '../BaseIcon'
import { UploadImage } from './assets/Upload'

const Add = (props: IconProps): JSX.Element => <BaseIcon {...props} icon={faPlus} />
const Edit = (props: IconProps): JSX.Element => <BaseIcon {...props} icon={faPencilAlt} />
const Delete = (props: IconProps): JSX.Element => <BaseIcon {...props} icon={faTrashAlt} />
const Show = (props: IconProps): JSX.Element => <BaseIcon {...props} icon={faEye} />
const Hide = (props: IconProps): JSX.Element => <BaseIcon {...props} icon={faEyeSlash} />
const Copy = (props: IconProps): JSX.Element => <BaseIcon {...props} icon={faCopy} />
const Save = (props: IconProps): JSX.Element => <BaseIcon {...props} icon={faSave} />
const Lock = (props: IconProps): JSX.Element => <BaseIcon {...props} icon={faLock} />
const Unlock = (props: IconProps): JSX.Element => <BaseIcon {...props} icon={faLockOpen} />
const Close = (props: IconProps): JSX.Element => <BaseIcon {...props} icon={faTimes} />
const Check = (props: IconProps): JSX.Element => <BaseIcon {...props} icon={faCheck} />
const BookmarkOff = (props: IconProps): JSX.Element => <BaseIcon {...props} icon={faBookmark} />
const BookmarkOn = (props: IconProps): JSX.Element => <BaseIcon {...props} icon={faBookmarkOn} />
const ToggleOn = (props: IconProps): JSX.Element => <BaseIcon {...props} icon={faToggleOn} />
const ToggleOff = (props: IconProps): JSX.Element => <BaseIcon {...props} icon={faToggleOff} />
const Download = (props: IconProps): JSX.Element => <BaseIcon {...props} icon={faDownload} />
const Upload = ({ size, ...rest }: IconProps): JSX.Element => (
  <BaseIcon {...rest} icon="adn">
    <UploadImage size={size || '1x'} />
  </BaseIcon>
)
const Like = (props: IconProps): JSX.Element => <BaseIcon {...props} icon={like} />
const Unlike = (props: IconProps): JSX.Element => <BaseIcon {...props} icon={unlike} />

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
  Upload,
  Like,
  Unlike,
}
