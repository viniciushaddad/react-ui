import React, { ChangeEvent, useState } from 'react'
import { TextField, MaskedField, Typography, Grid, Row, Col } from '@viniciushaddad/react-ui'

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
      <TextField name="input-fullwidth" label="Example Label FullWidth" type="text" fullWidth />
      <TextField name="input-lg" label="Example Label Size LG" type="text" inputSize="lg" />
      <TextField name="input-xs" label=" size xs" type="text" inputSize="xs" />
      <Grid>
        <Row>
          <Col size={2}>
            <TextField
              name="input-on-change"
              label="Example Label"
              type="text"
              value={badField}
              onChange={onChange}
              error="some validation has failed!"
              fullWidth
            />
          </Col>
          <Col size={3}>

          <MaskedField
            mask={[/[0-3]/,/\d/, '/', /[0-1]/, /\d/,'/', /\d/, /\d/, /\d/, /\d/]}
            name="input-name"
            label="Example Masked Input"
            type="text"
            fullWidth
          />
          </Col>
        </Row>
      </Grid>
    </section>
  )
}

export { InputExample }
