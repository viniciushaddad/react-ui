import { Typography } from 'components/Typography'
import { Button } from 'components/Button'
import React from 'react'
import { Row, Col, Grid } from 'components/Grid'

const ButtonExample = (): JSX.Element => (
  <section>
    <Typography variant="title1">Buttons</Typography>
    <Grid>
      <Row>
        <Col>
          <Button>Action Name</Button>
          <Button variant="inverted">Action Name</Button>
          <Button size="lg">Action Name</Button>
          <Button size="xs">Action Name</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button flavor="info">Action Name</Button>
          <Button flavor="positive">Action Name</Button>
          <Button flavor="warning">Action Name</Button>
          <Button flavor="negative">Action Name</Button>
        </Col>
      </Row>
    </Grid>
  </section>
)

export { ButtonExample }
