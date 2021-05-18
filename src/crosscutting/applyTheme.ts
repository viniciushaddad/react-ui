import { merge } from 'lodash'
import theme from 'themes/default'

type CustomTheme<T> = T & typeof theme

const applyTheme = (customTheme: unknown): CustomTheme<unknown> => merge(theme, customTheme)

export { applyTheme }
