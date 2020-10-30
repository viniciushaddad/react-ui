import React, { useContext } from 'react'
import { Typography } from 'components/Typography'
import { Row, Col, Grid } from 'components/Grid'
import { Action, Alert, Navigation, Social, Spinners } from 'components/Icons'
import { Box } from 'components/Box'
import { Card } from 'components/Card'
import { chunk } from 'lodash'
import { ThemeContext } from 'styled-components'

const IconSystemExample = (): JSX.Element => {
  const { palette } = useContext(ThemeContext)

  return (
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
      <Typography variant="title2" bordered>
        Sizing
      </Typography>
      <Card alignment="center">
        <Box>
          <span style={{ margin: '0.5em' }}>
            <Action.Hide size="sm" />
          </span>
          <span style={{ margin: '0.5em' }}>
            <Action.Hide size="lg" />
          </span>
          <span style={{ margin: '0.5em' }}>
            <Action.Hide size="2x" />
          </span>
          <span style={{ margin: '0.5em' }}>
            <Action.Copy size="sm" />
          </span>
          <span style={{ margin: '0.5em' }}>
            <Action.Copy size="lg" />
          </span>
          <span style={{ margin: '0.5em' }}>
            <Action.Copy size="2x" />
          </span>
          <span style={{ margin: '0.5em' }}>
            <Alert.Flag size="sm" />
          </span>
          <span style={{ margin: '0.5em' }}>
            <Alert.Flag size="lg" />
          </span>
          <span style={{ margin: '0.5em' }}>
            <Alert.Flag size="2x" />
          </span>
        </Box>
      </Card>

      <Typography variant="title2" bordered>
        Coloring
      </Typography>
      <Card alignment="center">
        <Box>
          <Box inline padding={['0 0.5em', '0 0.5em']}>
            <Social.Facebook color={palette.darkSlateBlue} size="3x" />
          </Box>
          <Box inline padding={['0 0.5em', '0 0.5em']}>
            <Social.GooglePlus color={palette.darkRed} size="3x" />
          </Box>
          <Box inline padding={['0 0.5em', '0 0.5em']}>
            <Social.Instagram color={palette.greenDark} size="3x" />
          </Box>
          <Box inline padding={['0 0.5em', '0 0.5em']}>
            <Social.Twitter color={palette.blueMunsell} size="3x" />
          </Box>
          <Box inline padding={['0 0.5em', '0 0.5em']}>
            <Social.Slack color={palette.sandyBrown} size="3x" />
          </Box>
          <Box inline padding={['0 0.5em', '0 0.5em']}>
            <Social.Github color={palette.corn} size="3x" />
          </Box>
        </Box>
      </Card>
    </section>
  )
}

export { IconSystemExample }
