import {} from 'styled-components'
import theme from './default'

declare module 'styled-components' {
  type Theme = typeof theme
  export type DefaultTheme = theme
}
