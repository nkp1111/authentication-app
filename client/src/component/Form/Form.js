import React from 'react'

import SignUpText from './SignUpText'
import Logo from './Logo'
import "./form.css"

const Form = ({ type = "signup" }) => {
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
    </div>
  )
}

export default Form
