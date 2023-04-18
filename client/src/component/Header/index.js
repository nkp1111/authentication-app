import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg'
import { MdGroup } from 'react-icons/md'
import { TbLogout } from 'react-icons/tb'

import { images, fetchLogout } from '../../utils'
import "./header.css"

const Index = ({ userData, setEditProfile }) => {

  const { username, name, image } = userData
  let imageToShow
  if (!image) {
    imageToShow = "https://www.gravatar.com/avatar/"
  } else {
    imageToShow = image.url
  }

  const navigator = useNavigate()

  const logout = (e) => {
    localStorage.removeItem("user")
    fetchLogout()
    navigator("/form/login")
  }

  return (
    <header>
      <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="/profile">
            <img src={images.logo} alt="logo" />
          </a>

          <div className="profile d-flex align-items-center ms-auto">
            <div>
              <img src={imageToShow} alt="avatar" width="50" height="50" />
            </div>
            {(name && name[0].toUpperCase() + name.slice(1,)) || username || "None"}
          </div>

          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <button className="dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                {/* <MdArrowDropDown /> */}
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#"
                    onClick={(e) => setEditProfile(false)}>
                    <CgProfile /> My Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#"><MdGroup />Group Chat</a>
                </li>

                <li><hr className="dropdown-divider" /></li>

                <li>
                  <a className="dropdown-item logout-item" href="#"
                    onClick={(e) => logout(e)}>
                    <TbLogout />Log Out
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Index
