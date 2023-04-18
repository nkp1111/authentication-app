import React, { useRef } from 'react'
import { MdEmail, MdLock } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

import useGlobalContext from '../../context'
import { fetchUser } from '../../utils'

const FormInput = ({ type }) => {

  const { setUserData } = useGlobalContext()
  const emailRef = useRef(null);
  const passwordRef = useRef(null)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    if (!form.checkValidity()) {
      e.stopPropagation()
      form.classList.add("was-validated")
    }
    else {
      const username = emailRef.current.value
      const password = passwordRef.current.value

      fetchUser(type, username, password)
        .then(data => {
          if (data) {
            setUserData(data)
            navigate("/profile")
          } else {
            navigate("/form/signup")
          }
        })
    }
  }

  return (
    <form className='needs-validation'
      onSubmit={(e) => handleSubmit(e)}
      noValidate
    >
      <div className="mb-3 input-group">
        <label htmlFor="email" className="form-label visually-hidden">Email</label>
        <span className="input-group-text" id="email-icon">
          <MdEmail />
        </span>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder='Email'
          aria-describedby="email-icon"
          ref={emailRef}
          required
          autoComplete="true" />
      </div>

      <div className="mb-3 input-group">
        <label htmlFor="password" className="form-label visually-hidden">Password</label>
        <span className="input-group-text" id="password-icon">
          <MdLock />
        </span>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder='Password'
          aria-describedby="password-icon"
          ref={passwordRef}
          required
          autoComplete="true" />
      </div>

      <button type="submit" className="btn mx-auto w-100">
        {type === "signup"
          ? "Start coding now"
          : "Login"}
      </button>
    </form>
  )
}

export default FormInput
