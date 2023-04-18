import React, { useEffect, useState } from 'react'
import { useNavigate, Routes, Route } from 'react-router-dom'

import useGlobalContext from '../../context'
import UserInfo from './UserInfo'
import EditForm from './EditForm'
import { Header } from '..'

const Index = () => {
  const navigate = useNavigate()
  const { userData, setUserData } = useGlobalContext()
  const { username, image = "https://www.gravatar.com/avatar/" } = userData

  const [editProfile, setEditProfile] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user")
    if (user) {
      setUserData(JSON.parse(user))
    } else {
      navigate("/form/login")
    }
  }, []);

  return (
    <div>
      <Header username={username} image={image} setEditProfile={setEditProfile} />
      {editProfile
        ? <EditForm userData={userData} setEditProfile={setEditProfile} />
        : <UserInfo userData={userData} setEditProfile={setEditProfile} />}
    </div>
  )
}

export default Index
