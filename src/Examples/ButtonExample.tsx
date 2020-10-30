import { Typography } from 'components/Typography'
import { Button } from 'components/Button'
import React from 'react'
import { Row, Col, Grid } from 'components/Grid'
import { Action, Navigation } from 'components/Icons'

const ButtonExample = (): JSX.Element => (
  <section>
    <Typography variant="title1">Buttons</Typography>
    <Grid>
      <Row>
        <Col>
          <Button>Neutral</Button>
          <Button size="xs">Small</Button>
          <Button size="lg" endIcon={<Action.Save />}>
            Large
          </Button>
          <Button variant="inverted" flavor="info">
            Inverted
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button flavor="info">Info</Button>
          <Button flavor="positive">Positive</Button>
          <Button flavor="warning">Warning</Button>
          <Button flavor="negative">Negative</Button>
        </Col>
      </Row>
    </Grid>
    <Typography variant="title2" bordered>
      With icon
    </Typography>
    <Grid>
      <Row>
        <Col>
          <Button flavor="info" endIcon={<Navigation.ArrowRight />}>
            Continue
          </Button>
        </Col>
      </Row>
    </Grid>

    <Typography variant="title2" bordered>
      Loading
    </Typography>
    <Grid>
      <Row>
        <Col>
          <Button flavor="info" loading>
            Loading
          </Button>
        </Col>
      </Row>
    </Grid>
  </section>
)

export { ButtonExample }
