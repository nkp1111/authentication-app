import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import useGlobalContext from '../../context'
import { Header } from '..'

const Index = () => {
  const navigate = useNavigate()
  const { userData: { username } } = useGlobalContext()

  useEffect(() => {
    if (!username) {
      navigate("/form/login")
    }
  }, [navigate, username]);

  return (
    <div>
      <Header />
      <section>
        <h2>User: {username}</h2>
      </section>
    </div>
  )
}

export default Index
