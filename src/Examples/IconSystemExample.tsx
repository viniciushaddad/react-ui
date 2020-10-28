import React from 'react'
import { Typography } from 'components/Typography'
import { Row, Col, Grid } from 'components/Grid'
import { Spinners } from 'components/Icons'

const IconSystemExample = (): JSX.Element => (
  <section>
    <Typography variant="title1">Icon System</Typography>
    <Grid>
      <Row>
        <Col>
          <Spinners.Loading variant="pulse" />
        </Col>
      </Row>
    </Grid>
  </section>
)

export { IconSystemExample }
