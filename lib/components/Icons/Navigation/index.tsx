import React from 'react'
import * as far from '@fortawesome/free-solid-svg-icons'
import { BaseIcon, IconProps } from '../BaseIcon'

const ArrowRight: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={far.faArrowRight} />
const ArrowDown: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={far.faArrowDown} />
const ArrowLeft: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={far.faArrowLeft} />
const ArrowUp: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={far.faArrowUp} />

const AngleRight: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={far.faAngleRight} />
const AngleDown: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={far.faAngleDown} />
const AngleLeft: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={far.faAngleLeft} />
const AngleUp: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={far.faAngleUp} />

const ChevronRight: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={far.faChevronRight} />
const ChevronDown: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={far.faChevronDown} />
const ChevronLeft: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={far.faChevronLeft} />
const ChevronUp: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={far.faChevronUp} />

const MenuVertical: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={far.faEllipsisV} />
const MenuHorizontal: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={far.faEllipsisH} />
const Menu: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={far.faBars} />

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
