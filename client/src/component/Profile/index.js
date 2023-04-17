import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import useGlobalContext from '../../context'
import { Header } from '..'

const Index = () => {
  const navigate = useNavigate()
  const { userData } = useGlobalContext()
  const { username, image = "https://www.gravatar.com/avatar/" } = userData

  useEffect(() => {
    if (!username) {
      navigate("/form/login")
    }
  }, [navigate, username]);

  return (
    <div>
      <Header username={username} image={image} />
      <section className='personal-info'>
        <h2>Personal info</h2>
        <p>Basic info, like your name and photo</p>
        <div className="card">
          {/* card heading  */}
          <div className="card-header d-flex align-items-center">
            <div>
              <h3 className="card-title">
                Profile
              </h3>
              <p>Some info may be visible to other people</p>
            </div>
            <div className='ms-auto w-25'>
              <button>Edit</button>
            </div>
          </div>
          {/* card body  */}
          <div className="card-body">
            <div className="container">
              {["photo", "name", "bio", "phone", "email", "password"].map(item => {
                return (
                  <div className="row">
                    <div className="col-4">{item.toUpperCase()}</div>
                    <div className="col-8">
                      {item === "password"
                        ? "**********"
                        : item === "photo"
                          ? <img src="https://www.gravatar.com/avatar/" alt="avatar" width="50" height="50" />
                          : ""}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Index
