import React from 'react'

import useGlobalContext from './context'
import { Form } from './component'

const App = () => {

  const { data } = useGlobalContext()

  return (
    <div>
      <Form type="signup" />
    </div>
  )
}

export default App

