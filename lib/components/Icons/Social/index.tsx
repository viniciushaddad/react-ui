import React from 'react'
import {
  faFacebookSquare,
  faGithubSquare,
  faGooglePlusSquare,
  faInstagramSquare,
  faSlack,
  faTwitterSquare,
  faWhatsappSquare,
} from '@fortawesome/free-brands-svg-icons'
import { BaseIcon, IconProps } from '../BaseIcon'

const Facebook: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faFacebookSquare} />
const GooglePlus: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faGooglePlusSquare} />
const Twitter: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faTwitterSquare} />
const Slack: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faSlack} />
const Instagram: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faInstagramSquare} />
const Github: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faGithubSquare} />
const Whatsapp: React.FC<IconProps> = (props): JSX.Element => <BaseIcon {...props} icon={faWhatsappSquare} />

export { Facebook, GooglePlus, Twitter, Slack, Instagram, Github, Whatsapp }
