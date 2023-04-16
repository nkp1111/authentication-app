import React from 'react'

import SignUpText from './SignUpText'
import Logo from './Logo'
import FormInput from './FormInput'
import SocialProfile from './SocialProfile'
import "./form.css"

const Index = ({ type = "signup" }) => {
  return (
    <div className='app__form card'>
      <Logo />
      {type === "signup"
        ? <SignUpText />
        : (
          <div className='app__form-head'>
            <p>Login</p>
          </div>
        )}
      <FormInput />
      <SocialProfile />
    </div>
  )
}

export default Index
