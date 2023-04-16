import React from 'react'

import useGlobalContext from './context'
import { Form } from './component'

const App = () => {

  const { data } = useGlobalContext()

  return (
    <div className='d-flex flex-column justify-content-center align-items-center vh-100'>
      <Form type="signup" />
    </div>
  )
}

export default App

