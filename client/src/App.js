import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import useGlobalContext from './context'
import { Form } from './component'

const App = () => {

  const { data } = useGlobalContext()

  return (
    <main>
      <Toaster />
      <Routes>
        <Route path="/form/:type" element={<Form />} />
      </Routes>

    </main>
  )
}

export default App

