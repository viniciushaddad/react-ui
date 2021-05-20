import React, { ChangeEvent, useState } from 'react'
import { TextField } from 'components/TextField'
import { Typography } from 'components/Typography'
import { Grid, Row, Col } from 'components/Grid'

const InputExample = (): JSX.Element => {
  const [badField, setBadField] = useState('a bad value for this input!')
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.error(event.currentTarget.value)
    setBadField(event.currentTarget.value)
  }

  return (
    <section>
      <Typography variant="title1">Text Input</Typography>
      <TextField name="input-name" label="Example Label" type="text" />
      <TextField name="input-name" label="Example Label" type="text" fullWidth />
      <TextField name="input-name" label="Example Label" type="text" inputSize="lg" />
      <TextField name="input-name" label="Example Label" type="text" inputSize="xs" />
      <Grid>
        <Row>
          <Col size={2}>
            <TextField
              name="input-name"
              label="Example Label"
              type="text"
              value={badField}
              onChange={onChange}
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
