import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import useGlobalContext from '../../context'
import UserInfo from './UserInfo'
import EditForm from './EditForm'
import { Header, Footer } from '..'
import "./profile.css"

const Index = () => {
  const navigate = useNavigate()
  const { userData, setUserData } = useGlobalContext()

  const [editProfile, setEditProfile] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user")
    if (user) {
      setUserData(JSON.parse(user))
    } else {
      navigate("/form/login")
    }
  }, [navigate, setUserData]);

  return (
    <div>
      <Header userData={userData} setEditProfile={setEditProfile} />
      <div className="profile-holder">
        {editProfile
          ? <EditForm userData={userData} setEditProfile={setEditProfile} />
          : <UserInfo userData={userData} setEditProfile={setEditProfile} />}
        <Footer />
      </div>
    </div>
  )
}

export default Index
