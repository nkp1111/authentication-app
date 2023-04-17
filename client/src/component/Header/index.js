import React from 'react'
import { useParams } from 'react-router-dom'
import toast from 'react-hot-toast'

import { notFicStyles, images } from '../../utils'


const { errorStyle, successStyle } = notFicStyles

const Index = ({ userData }) => {

  // const { name = "something", img } = userData

  const logout = (e) => {
    const route = "/user/logout"
    const url = process.env.NODE_ENV !== "development" ? route : "http://localhost:5000" + route
    fetch(url, {
      method: "POST"
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
        }
      })
      .catch(err => {
        console.log(err)
        toast("Error happened", {
          style: errorStyle
        })
        console.log(err)
      })
  }

  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/profile">
            <img src={images.logo} alt="logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>

          <button className='btn ms-auto'
            onClick={(e) => logout(e)}
          >
            Logout
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Index
