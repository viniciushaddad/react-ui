import React from 'react'
import { Typography,
  Row,
  Col,
  Grid,
  Action,
  Alert,
  Navigation,
  Social,
  Spinners,
  Box,
  Card
} from '@viniciushaddad/react-ui'
import { chunk } from 'lodash'

const IconSystemExample = (): JSX.Element => (
  <section>
    <Typography variant="title1">Icon System</Typography>
    <Typography variant="title2" bordered>
      Spinners
    </Typography>
    <Row>
      <Col>
        <Card alignment="center">
          <Box>
            <Spinners.Loading pulse />
          </Box>
          <Box padding={['0 2em', '0 1em']}>
            <Typography>{`<Spinners.Loading pulse />`}</Typography>
          </Box>
        </Card>
      </Col>
      <Col>
        <Card alignment="center">
          <Box>
            <Spinners.Loading />
          </Box>
          <Box padding={['0 2em', '0 1em']}>
            <Typography>{`<Spinners.Loading />`}</Typography>
          </Box>
        </Card>
      </Col>
    </Row>
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
          <Social.Facebook color="darkSlateBlue" size="3x" />
        </Box>
        <Box inline padding={['0 0.5em', '0 0.5em']}>
          <Social.GooglePlus color="darkRed" size="3x" />
        </Box>
        <Box inline padding={['0 0.5em', '0 0.5em']}>
          <Social.Instagram color="greenDark" size="3x" />
        </Box>
        <Box inline padding={['0 0.5em', '0 0.5em']}>
          <Social.Twitter color="blueMunsell" size="3x" />
        </Box>
        <Box inline padding={['0 0.5em', '0 0.5em']}>
          <Social.Slack color="sandyBrown" size="3x" />
        </Box>
        <Box inline padding={['0 0.5em', '0 0.5em']}>
          <Social.Github color="corn" size="3x" />
        </Box>
      </Box>
    </Card>
  </section>
)


export { IconSystemExample }
