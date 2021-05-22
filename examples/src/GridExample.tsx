import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Row, Grid, Col, Typography, Box } from '@viniciushaddad/react-ui'
import { getLoremIpsum } from './api/loremIpsum'

const ColoredDiv = styled.div<{bg: string}>`
  background-color: ${({theme, bg}) => theme?.palette && theme.palette[bg]};
`

const GridExample = (): JSX.Element => {
  const [lorems, setLorems] = useState<string[]>([])

  useEffect(() => {
    let mounted = true
    if (lorems.length > 0) return

    Promise.all([
      getLoremIpsum({ paras: `${Math.random() * 5}`, sentences: `${Math.random() * 10}` }),
      getLoremIpsum({ paras: `${Math.random() * 10}`, sentences: `${Math.random() * 20}` }),
      getLoremIpsum({ paras: `${Math.random() * 10}`, sentences: `${Math.random() * 20}` }),
      getLoremIpsum({ paras: `${Math.random() * 3}`, sentences: `${Math.random() * 5}` }),
      getLoremIpsum({ paras: `${Math.random() * 10}`, sentences: `${Math.random() * 20}` }),
      getLoremIpsum({ paras: `${Math.random() * 10}`, sentences: `${Math.random() * 20}` }),
    ]).then((responses) => {
      if (mounted) setLorems(responses)
    })
    return () => {
      mounted = false
    }
  }, [lorems])

  return (
    <section>
      <Typography variant="title1">Grid System</Typography>
      <Grid>
        <Row>
          <Col size={1}>
            <ColoredDiv bg="grayMedium">
              <Box>
                <Typography>{lorems[0]}</Typography>
              </Box>
            </ColoredDiv>
          </Col>
          <Col size={2}>
            <ColoredDiv bg="inchworm">
              <Box>
                <Typography>{lorems[1]}</Typography>
              </Box>
            </ColoredDiv>
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            <ColoredDiv bg="keppel">
              <Box>
                <Typography>{lorems[2]}</Typography>
              </Box>
            </ColoredDiv>
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            <ColoredDiv bg="blueMunsell">
              <Box>
                <Typography>{lorems[3]}</Typography>
              </Box>
            </ColoredDiv>
          </Col>
          <Col size={3}>
            <ColoredDiv bg="maizeCrayola">
              <Box>
                <Typography>{lorems[4]}</Typography>
              </Box>
            </ColoredDiv>
          </Col>
          <Col size={2} xs="hide">
            <ColoredDiv bg="sandyBrown">
              <Box>
                <Typography variant="title1">Hides on XS!</Typography>
                <Typography>{lorems[5]}</Typography>
              </Box>
            </ColoredDiv>
          </Col>
        </Row>
      </Grid>
    </section>
  )
}

export { GridExample }
