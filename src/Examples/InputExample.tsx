import React, { useState } from 'react'
import { TextField } from 'components/TextField'
import { Typography } from 'components/Typography'
import { Grid, Row, Col } from 'components/Grid'

const InputExample = (): JSX.Element => {
  const [badField, setBadField] = useState('a bad value for this input!')

  return (
    <section>
      <Typography variant="title1">Text Input</Typography>
      <TextField label="Example Label" type="text" />
      <TextField label="Example Label" type="text" fullWidth />
      <TextField label="Example Label" type="text" inputSize="lg" />
      <TextField label="Example Label" type="text" inputSize="xs" />
      <Grid>
        <Row>
          <Col size={2}>
            <TextField
              label="Example Label"
              type="text"
              value={badField}
              onValueChange={setBadField}
              error="some validation has failed!"
              fullWidth
            />
          </Col>
          <Col size={3}></Col>
        </Row>
      </Grid>
    </section>
  )
}

export { InputExample }
