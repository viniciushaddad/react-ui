import { string } from 'prop-types'
import React from 'react'
import { Typography } from '../Typography'

const FieldError = ({ text }: { text: string | string[] }): JSX.Element => (
  <Typography variant="label" color="redWood">
    {Array.isArray(text) ? text.join('; ') : text}
  </Typography>
)
FieldError.propTypes = { children: string }

export { FieldError }
