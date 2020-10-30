import React from 'react'
import { Box } from 'components/Box'
import { Container } from 'components/Container'
import { Header } from 'components/Header/Header'
import { Typography } from 'components/Typography'
import { ButtonExample, GridExample, IconSystemExample, InputExample } from 'Examples'

const App = (): JSX.Element => (
  <Container>
    <Box>
      <Header>
        <Typography variant="largetitle">Styled Components to compose Basic UIs with themes!</Typography>
        <Typography variant="title2">Examples below.</Typography>
      </Header>

      <IconSystemExample />
      <InputExample />
      <ButtonExample />
      <GridExample />
    </Box>
  </Container>
)

export default App
