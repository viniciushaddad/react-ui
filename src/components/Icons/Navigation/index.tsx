import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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

const ArrowRight = (): JSX.Element => <FontAwesomeIcon icon={faArrowRight} />
const ArrowDown = (): JSX.Element => <FontAwesomeIcon icon={faArrowDown} />
const ArrowLeft = (): JSX.Element => <FontAwesomeIcon icon={faArrowLeft} />
const ArrowUp = (): JSX.Element => <FontAwesomeIcon icon={faArrowUp} />

const AngleRight = (): JSX.Element => <FontAwesomeIcon icon={faAngleRight} />
const AngleDown = (): JSX.Element => <FontAwesomeIcon icon={faAngleDown} />
const AngleLeft = (): JSX.Element => <FontAwesomeIcon icon={faAngleLeft} />
const AngleUp = (): JSX.Element => <FontAwesomeIcon icon={faAngleUp} />

const ChevronRight = (): JSX.Element => <FontAwesomeIcon icon={faChevronRight} />
const ChevronDown = (): JSX.Element => <FontAwesomeIcon icon={faChevronDown} />
const ChevronLeft = (): JSX.Element => <FontAwesomeIcon icon={faChevronLeft} />
const ChevronUp = (): JSX.Element => <FontAwesomeIcon icon={faChevronUp} />

const MenuVertical = (): JSX.Element => <FontAwesomeIcon icon={faEllipsisV} />
const MenuHorizontal = (): JSX.Element => <FontAwesomeIcon icon={faEllipsisH} />
const Menu = (): JSX.Element => <FontAwesomeIcon icon={faBars} />

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
