import React from 'react'
import { FiMail } from 'react-icons/fi'
import { MdLock } from 'react-icons/md'


const FormInput = () => {
  return (
    <form className='needs-validation'>

      <div class="mb-3 input-group">
        <label for="email" class="form-label visually-hidden">Email</label>
        <span class="input-group-text" id="email-icon">
          <FiMail />
        </span>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder='Email'
          aria-describedby="email-icon" />
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
          aria-describedby="password-icon" />
      </div>

      <button type="submit" class="btn">Submit</button>
    </form>
  )
}

export default FormInput
