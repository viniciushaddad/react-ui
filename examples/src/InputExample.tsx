import React, { ChangeEvent, useState } from 'react'
import { TextField, FileField, MaskedField, Typography, Grid, Row, Col, CurrencyField } from '@viniciushaddad/react-ui'

const InputExample = (): JSX.Element => {
  const [badField, setBadField] = useState('Foo!')
  const onChange = (event: ChangeEvent<HTMLInputElement>) => setBadField(event.currentTarget.value)

  return (
    <section>
      <Typography variant="title1">Text Input</Typography>
      <TextField name="input-name" label="Example Label" type="text" />
      <TextField name="input-fullwidth" label="Example Label FullWidth" type="text" fullWidth />
      <TextField name="input-lg" label="Example Label Size LG" type="text" inputSize="lg" />
      <TextField name="input-xs" label=" size xs" type="text" inputSize="xs" />
      <Grid>
        <Row>
          <Col>
            <TextField
              name="input-on-change"
              label="Example with Error"
              type="text"
              value={badField}
              onChange={onChange}
              error="this input has an invalid value!"
              fullWidth
            />
          </Col>
          <Col>
            <MaskedField
              mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
              name="input-name"
              label="Example Masked Input"
              type="text"
              fullWidth
            />
          </Col>
          <Col>
            <CurrencyField type="text" name="currency-field" label="Currency Field!" fullWidth />
          </Col>
        </Row>
        <Row>
          <Col>
            <Typography variant="title2" bordered>File Input 🌚</Typography>
            <FileField name="files" accept="image/*" multiple onChange={(console.error)} />
          </Col>
        </Row>
      </Grid>
    </section>
  )
}

export { InputExample }
