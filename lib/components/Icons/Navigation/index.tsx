import React from 'react'
import {
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faAngleUp,
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faArrowUp,
  faBars,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  faEllipsisH,
  faEllipsisV,
} from '@fortawesome/free-solid-svg-icons'
import { BaseIcon, IconProps } from '../BaseIcon'

const ArrowRight: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faArrowRight} />
const ArrowDown: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faArrowDown} />
const ArrowLeft: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faArrowLeft} />
const ArrowUp: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faArrowUp} />

const AngleRight: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faAngleRight} />
const AngleDown: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faAngleDown} />
const AngleLeft: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faAngleLeft} />
const AngleUp: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faAngleUp} />

const ChevronRight: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faChevronRight} />
const ChevronDown: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faChevronDown} />
const ChevronLeft: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faChevronLeft} />
const ChevronUp: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faChevronUp} />

const MenuVertical: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faEllipsisV} />
const MenuHorizontal: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faEllipsisH} />
const Menu: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faBars} />

export {
  ArrowRight,
  ArrowDown,
  ArrowLeft,
  ArrowUp,
  AngleRight,
  AngleDown,
  AngleLeft,
  AngleUp,
  ChevronRight,
  ChevronDown,
  ChevronLeft,
  ChevronUp,
  MenuVertical,
  MenuHorizontal,
  Menu,
}
