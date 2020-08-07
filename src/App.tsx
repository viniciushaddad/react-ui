import React from 'react'
import { TextField } from 'components/TextField'

const App = (): JSX.Element => (
  <div>
    <header>
      <p>Styled Components to compose Basic UIs with themes!</p>
    </header>
    <section>
      <header>
        <h1>Examples below.</h1>
      </header>
      <TextField label="Example Label" type="text" />
    </section>
  </div>
)

export default App
