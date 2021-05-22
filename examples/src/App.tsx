import React from 'react'
import { Box, Container , Header , Typography } from '@viniciushaddad/react-ui'
import { ButtonExample } from './ButtonExample'
import { GridExample } from './GridExample'
import { InputExample } from './InputExample'
import { IconSystemExample } from './IconSystemExample'
import { TypoSystemExample } from './TypoSystemExample'

const App = (): JSX.Element => (
  <Container>
    <Box>
      <Header>
        <Typography variant="largetitle">Styled Components to compose Basic UIs with themes!</Typography>
        <Typography variant="title2">Examples below.</Typography>
      </Header>

      <TypoSystemExample />
      <IconSystemExample />
      <InputExample />
      <ButtonExample />
      <GridExample />
    </Box>
  </Container>
)

export default App
