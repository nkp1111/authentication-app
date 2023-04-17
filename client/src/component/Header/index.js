import React from 'react'
import { useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import { CgProfile } from 'react-icons/cg'
import { MdGroup, MdArrowDropDown } from 'react-icons/md'
import { TbLogout } from 'react-icons/tb'

import { notFicStyles, images } from '../../utils'
import "./header.css"

const { errorStyle, successStyle } = notFicStyles

const Index = ({ username, image, setEditProfile }) => {

  const logout = (e) => {
    const route = "/user/logout"
    const url = process.env.NODE_ENV !== "development" ? route : "http://localhost:5000" + route
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
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

          <div className="profile d-flex align-items-center ms-auto">
            <div>
              <img src={image} alt="avatar" width="50" height="50" />
            </div>
            {username || "Dummy 1"}
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
