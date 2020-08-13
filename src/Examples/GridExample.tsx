import React, { useState, useEffect } from 'react'
import { Row, Grid, Col } from 'components/Grid'
import { Typography } from 'components/Typography'
import theme from 'themes/default'
import { getLoremIpsum } from 'api/loremIpsum'
import { Box } from 'components/Box'

const GridExample = (): JSX.Element => {
  const [lorems, setLorems] = useState<string[]>([])

  useEffect(() => {
    if (lorems.length > 0) return

    Promise.all([
      getLoremIpsum({ paras: `${Math.random() * 5}`, sentences: `${Math.random() * 10}` }),
      getLoremIpsum({ paras: `${Math.random() * 10}`, sentences: `${Math.random() * 20}` }),
      getLoremIpsum({ paras: `${Math.random() * 10}`, sentences: `${Math.random() * 20}` }),
      getLoremIpsum({ paras: `${Math.random() * 3}`, sentences: `${Math.random() * 5}` }),
      getLoremIpsum({ paras: `${Math.random() * 10}`, sentences: `${Math.random() * 20}` }),
      getLoremIpsum({ paras: `${Math.random() * 10}`, sentences: `${Math.random() * 20}` }),
    ]).then((responses) => setLorems(responses))
  }, [lorems])

  return (
    <section>
      <Typography variant="title1">Grid System</Typography>
      <hr />
      <Grid>
        <Row>
          <Col size={1}>
            <div style={{ backgroundColor: theme.palette.grayMedium, height: '100%' }}>
              <Box>
                <Typography> {lorems[0]}</Typography>
              </Box>
            </div>
          </Col>
          <Col size={2}>
            <div style={{ backgroundColor: theme.palette.inchworm, height: '100%' }}>
              <Box>
                <Typography> {lorems[1]}</Typography>
              </Box>
            </div>
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            <div style={{ backgroundColor: theme.palette.keppel, height: '100%' }}>
              <Box>
                <Typography> {lorems[2]}</Typography>
              </Box>
            </div>
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            <div style={{ backgroundColor: theme.palette.blueMunsell, height: '100%' }}>
              <Box>
                <Typography> {lorems[3]}</Typography>
              </Box>
            </div>
          </Col>
          <Col size={3}>
            <div style={{ backgroundColor: theme.palette.maizeCrayola, height: '100%' }}>
              <Box>
                <Typography> {lorems[4]}</Typography>
              </Box>
            </div>
          </Col>
          <Col size={2} xs="hide">
            <div style={{ backgroundColor: theme.palette.sandyBrown, height: '100%' }}>
              <Box>
                <Typography variant="title1">Hides on XS!</Typography>
                <Typography> {lorems[5]}</Typography>
              </Box>
            </div>
          </Col>
        </Row>
      </Grid>
    </section>
  )
}

export { GridExample }
