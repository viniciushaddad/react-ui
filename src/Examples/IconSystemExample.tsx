import React from 'react'
import { Typography } from 'components/Typography'
import { Row, Col, Grid } from 'components/Grid'
import { Action, Alert, Navigation, Spinners } from 'components/Icons'
import { Box } from 'components/Box'
import { Card } from 'components/Card'
import { chunk } from 'lodash'

const IconSystemExample = (): JSX.Element => (
  <section>
    <Typography variant="title1">Icon System</Typography>
    <Typography variant="title2" bordered>
      Spinners
    </Typography>
    <Spinners.Loading variant="pulse" />
    <Typography variant="title2" bordered>
      Actions
    </Typography>
    <Grid>
      {chunk(Object.entries(Action), 3).map((iconsInRows, index) => (
        <Row key={`icon-row-${index}`}>
          {iconsInRows.map(([iconName, Icon], index) => (
            <Col key={`icon-col-${index}`}>
              <Card alignment="center">
                <Box>
                  <Icon />
                </Box>
                <Box padding={['0 2em', '0 1em']}>
                  <Typography>{`<Action.${iconName} />`}</Typography>
                </Box>
              </Card>
            </Col>
          ))}
        </Row>
      ))}

      <Typography variant="title2" bordered>
        Alerts
      </Typography>
      {chunk(Object.entries(Alert), 3).map((iconsInRows, index) => (
        <Row key={`icon-row-${index}`}>
          {iconsInRows.map(([iconName, Icon], index) => (
            <Col key={`icon-col-${index}`}>
              <Card alignment="center">
                <Box>
                  <Icon />
                </Box>
                <Box padding={['0 2em', '0 1em']}>
                  <Typography>{`<Alert.${iconName} />`}</Typography>
                </Box>
              </Card>
            </Col>
          ))}
        </Row>
      ))}

      <Typography variant="title2" bordered>
        Navigations
      </Typography>
      {chunk(Object.entries(Navigation), 3).map((iconsInRows, index) => (
        <Row key={`icon-row-${index}`}>
          {iconsInRows.map(([iconName, Icon], index) => (
            <Col key={`icon-col-${index}`}>
              <Card alignment="center">
                <Box>
                  <Icon />
                </Box>
                <Box padding={['0 2em', '0 1em']}>
                  <Typography>{`<Navigation.${iconName} />`}</Typography>
                </Box>
              </Card>
            </Col>
          ))}
        </Row>
      ))}
    </Grid>
  </section>
)

export { IconSystemExample }
