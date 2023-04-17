import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import { Form, Profile } from './component'

const App = () => {

  return (
    <main>
      <Toaster />
      <Routes>
        <Route path="/form/:type" element={<Form />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </main>
  )
}

export default App

