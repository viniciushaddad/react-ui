import React, { useState } from 'react'
import { Typography, Button,  Row, Col, Grid,  Action, Navigation, Box } from '@viniciushaddad/react-ui'

const ButtonExample = (): JSX.Element => {
  const [clicks, setClicks] = useState<string[]>([])
  const addClick = () => setClicks([...clicks, 'Clicked!'])
  const clearClicks = () => setClicks([])

  const [loading, setLoading] = useState(false)
  const load = () => {
    if (loading) return
    setLoading(true)
    setTimeout(() => setLoading(false), 1000)
  }

  return (
    <section>
      <Typography variant="title1">Buttons</Typography>
      <Grid>
        <Row>
          <Col>
            <Button>Neutral</Button>
            <Button size="xs">Small</Button>
            <Button size="lg" endIcon={<Action.Save size="2x" />}>
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
        <Row>
          <Col>
            <Button flavor="neutral" disabled>
              Disabled!
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Typography variant="title2" bordered>
              With icon
            </Typography>
            <Button flavor="info" endIcon={<Navigation.ArrowRight />}>
              Continue
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Typography variant="title2" bordered>
              Loading
            </Typography>
            <Button flavor="info" loading>
              Loading
            </Button>
            <Button flavor="info" {...{ loading }} onClick={load}>
              Load !
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Typography variant="title2" bordered>
              Handling onClick
            </Typography>
            <Button flavor="info" onClick={addClick}>
              Click!
            </Button>
            <Button onClick={clearClicks}>Clear</Button>
            <Box>
              <Typography>{clicks.join(' ')}</Typography>
            </Box>
          </Col>
        </Row>
      </Grid>
    </section>
  )
}

export { ButtonExample }
