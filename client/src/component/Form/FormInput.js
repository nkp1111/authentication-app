import React from 'react'
import { MdEmail, MdLock } from 'react-icons/md'


const FormInput = ({ type }) => {
  return (
    <form className='needs-validation'
      onSubmit={(e) => {
        e.preventDefault()
        const form = e.currentTarget
        if (!form.checkValidity()) {
          e.stopPropagation()
          form.classList.add("was-validated")
        }
      }}
      noValidate
    >
      <div class="mb-3 input-group">
        <label for="email" class="form-label visually-hidden">Email</label>
        <span class="input-group-text" id="email-icon">
          <MdEmail />
        </span>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder='Email'
          aria-describedby="email-icon"
          required />
      </div>

      <div class="mb-3 input-group">
        <label for="password" class="form-label visually-hidden">Password</label>
        <span class="input-group-text" id="password-icon">
          <MdLock />
        </span>
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder='Password'
          aria-describedby="password-icon"
          required />
      </div>

      <button type="submit" class="btn mx-auto w-100">
        {type === "signup"
          ? "Start coding now"
          : "Login"}
      </button>
    </form>
  )
}

export default FormInput
