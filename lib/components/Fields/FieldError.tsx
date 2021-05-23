import { string } from 'prop-types'
import React from 'react'
import { Typography } from '../Typography'

const FieldError = ({ text }: { text: string }): JSX.Element => (
  <Typography variant="label" color="redWood">
    {text}
  </Typography>
)
FieldError.propTypes = { children: string }

export { FieldError }
