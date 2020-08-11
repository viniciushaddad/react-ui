import React from 'react'
import { TextField } from 'components/TextField'
import { Box } from 'components/Box'
import { Typography } from 'components/Typography'

const InputExample = (): JSX.Element => (
  <section>
    <Typography variant="title1">Text Input</Typography>
    <hr />
    <Box>
      <TextField label="Example Label" type="text" />
    </Box>
  </section>
)

export { InputExample }
