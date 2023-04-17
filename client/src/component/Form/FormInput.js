import React, { useRef } from 'react'
import { MdEmail, MdLock } from 'react-icons/md'
import toast from 'react-hot-toast'

// notification styles 
const errorStyle = {
  border: "1px solid red",
  background: "rgba(255,0,0,0.3)",
  color: "#333",
  fontWeight: "600"
}

const successStyle = {
  background: "rgba(0,255,0,0.3)",
  color: "#333",
  fontWeight: "600"
}

const FormInput = ({ type }) => {

  const emailRef = useRef(null);
  const passwordRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    if (!form.checkValidity()) {
      e.stopPropagation()
      form.classList.add("was-validated")
    }
    else {
      const route = type === "signup" ? "/user/register" : "/user/login"
      const url = process.env.NODE_ENV !== "development" ? route : "http://localhost:5000" + route

      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          username: emailRef.current.value,
          password: passwordRef.current.value
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(res => res.json())
        .then(data => {
          if (data.error) {
            toast(data.error, {
              style: errorStyle
            })
          }
          if (data.success) {
            toast(data.success, {
              style: successStyle
            })
            console.log(data.user)
          }
        })
        .catch(err => {
          console.log("error happened during user register/login")
          toast("Something went wrong", {
            style: errorStyle
          })
          console.log(err)
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
          required />
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
          required />
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
