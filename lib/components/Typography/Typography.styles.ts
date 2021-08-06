import { entries } from 'lodash'
import { css } from 'styled-components'

const joinStyles = (styles: { [index: string]: string }) =>
  entries(styles)
    .map(([prop, style]) => `${prop}: ${style};`)
    .join()

const largetitle = css`
  font-size: 3em;
  line-height: 1.25em;
  font-weight: 800;
  margin-bottom: 0.5em;
  ${({ theme: { typography } }) => joinStyles(typography.largetitle)}
`
const title1 = css`
  font-size: 2.5em;
  font-weight: 600;
  margin-bottom: 0.5em;
  ${({ theme: { typography } }) => joinStyles(typography.title1)}
`
const title2 = css`
  font-size: 2em;
  font-weight: 600;
  margin-bottom: 0.5em;
  ${({ theme: { typography } }) => joinStyles(typography.title2)}
`
const title3 = css`
  font-size: 1.75em;
  font-weight: 400;
  margin-bottom: 0.5em;
  ${({ theme: { typography } }) => joinStyles(typography.title3)}
`
const headline = css`
  font-size: 1.5em;
  font-weight: 400;
  margin-bottom: 0.6em;
  ${({ theme: { typography } }) => joinStyles(typography.headline)}
`
const subhead = css`
  font-size: 1em;
  font-weight: 300;
  margin-bottom: 0.9em;
  ${({ theme: { typography } }) => joinStyles(typography.subhead)}
`
const callout = css`
  font-size: 1em;
  font-weight: 300;
  margin-bottom: 0.9em;
  text-transform: uppercase;
  ${({ theme: { typography } }) => joinStyles(typography.callout)}
`
const body = css`
  font-size: 1em;
  font-weight: 400;
  margin-bottom: 1em;
  ${({ theme: { typography } }) => joinStyles(typography.body)}
`
const body2 = css`
  font-size: 0.85em;
  font-weight: 400;
  margin-bottom: 1em;
  ${({ theme: { typography } }) => joinStyles(typography.body2)}
`
const footnote = css`
  font-size: 0.75em;
  ${({ theme: { typography } }) => joinStyles(typography.footnote)}
`
const button = css`
  font-weight: 600;
  line-height: 1.5em;
  text-transform: uppercase;
  ${({ theme: { typography } }) => joinStyles(typography.button)}
`
const label = css`
  line-height: 1em;
  font-weight: 600;
  ${({ theme: { typography } }) => joinStyles(typography.label)}
`

export { largetitle, title1, title2, title3, headline, subhead, callout, body, body2, footnote, button, label }
