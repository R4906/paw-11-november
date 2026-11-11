import React from 'react'
import Button from './components/Button'

const App = () => {
  return (
    <div>
      <h1>Hidup Jokowi</h1>

      <Button label="Button login" color="blue"/>
      <Button label="Button register" color="green"/>
      <Button label="Button logout" color="red"/>

    </div>
  )
}

export default App