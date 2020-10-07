import React from 'react'
import { Header } from 'components/Header/Header'
import { Box } from 'components/Box'
import { GridExample } from 'Examples'
import { InputExample } from 'Examples/InputExample'
import { Typography } from 'components/Typography'
import { ButtonExample } from 'Examples/ButtonExample'

const App = (): JSX.Element => (
  <Box>
    <Header>
      <Typography variant="largetitle">Styled Components to compose Basic UIs with themes!</Typography>
      <Typography variant="title2">Examples below.</Typography>
    </Header>

    <InputExample />
    <ButtonExample />
    <GridExample />
  </Box>
)

export default App
