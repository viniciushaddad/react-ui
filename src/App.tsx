import React from 'react'
import { TextField } from 'components/TextField'

const App = (): JSX.Element => (
  <div>
    <header>
      <p>Styled Components to compose Basic UI with themes!</p>
    </header>
    <section>
      <header>Examples below.</header>
      <TextField label="Example Label" type="text" />
    </section>
  </div>
)

export default App
