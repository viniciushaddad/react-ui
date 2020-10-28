import React from 'react'
import { Header } from 'components/Header/Header'
import { Box } from 'components/Box'
import { Typography } from 'components/Typography'
import { ButtonExample, GridExample, IconSystemExample, InputExample } from 'Examples'

const App = (): JSX.Element => (
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
)

export default App
