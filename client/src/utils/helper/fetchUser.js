import toast from 'react-hot-toast'

import { notFicStyles } from '../'

const { errorStyle, successStyle } = notFicStyles

const fetchUser = (type, username, password) => {
  // fetch user data after register and login
  const route = type === "signup" ? "/user/register" : "/user/login"
  const url = process.env.NODE_ENV !== "development" ? route : "http://localhost:5000" + route

  return fetch(url, {
    method: "POST",
    body: JSON.stringify({
      username,
      password,
    }),
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
        localStorage.setItem("user", JSON.stringify(data.user))
        return data.user
      }
    })
    .catch(err => {
      toast("Please sign Up!", {
        style: errorStyle
      })
    })
}

export default fetchUser