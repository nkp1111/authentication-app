import React from 'react'
import { useParams } from 'react-router-dom'

import SignUpText from './SignUpText'
import Logo from './Logo'
import FormInput from './FormInput'
import SocialProfile from './SocialProfile'
import "./form.css"

const Index = () => {

  // sign up and login form
  const { type } = useParams()

  return (
    <div className='d-flex flex-column justify-content-center align-items-center vh-100'>
      <div className="app__form card">
        <Logo />
        {type === "signup"
          ? <SignUpText />
          : (
            <div className='app__form-head'>
              <strong>Login</strong>
            </div>
          )}
        <FormInput type={type} />
        <SocialProfile type={type} />
      </div>
    </div>
  )
}

export default Index
