import React, { useState, useEffect } from 'react'
import { Row, Grid, Col, Typography, Box } from '@viniciushaddad/react-ui'
import { getLoremIpsum } from './api/loremIpsum'
import styled from 'styled-components'

const ColoreDiv = styled.div<{bg: string}>`
  background-color: ${({ theme: {palette}, bg}) => palette[bg]};
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
            <ColoreDiv bg={'grayMedium'}>
              <Box>
                <Typography>{lorems[0]}</Typography>
              </Box>
            </ColoreDiv>
          </Col>
          <Col size={2}>
            <ColoreDiv bg={'inchworm'}>
              <Box>
                <Typography>{lorems[1]}</Typography>
              </Box>
            </ColoreDiv>
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            <ColoreDiv bg={'keppel'}>
              <Box>
                <Typography>{lorems[2]}</Typography>
              </Box>
            </ColoreDiv>
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            <ColoreDiv bg={'blueMunsell'}>
              <Box>
                <Typography>{lorems[3]}</Typography>
              </Box>
            </ColoreDiv>
          </Col>
          <Col size={3}>
            <ColoreDiv bg={'maizeCrayola'}>
              <Box>
                <Typography>{lorems[4]}</Typography>
              </Box>
            </ColoreDiv>
          </Col>
          <Col size={2} xs="hide">
            <ColoreDiv bg={'sandyBrown'}>
              <Box>
                <Typography variant="title1">Hides on XS!</Typography>
                <Typography>{lorems[5]}</Typography>
              </Box>
            </ColoreDiv>
          </Col>
        </Row>
      </Grid>
    </section>
  )
}

export { GridExample }
