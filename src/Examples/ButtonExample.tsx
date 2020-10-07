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
        </Col>
      </Row>
    </Grid>
  </section>
)

export { ButtonExample }
