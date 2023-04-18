import toast from 'react-hot-toast'

import { notFicStyles } from '../'

const { errorStyle, successStyle } = notFicStyles

const logout = () => {

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

export default logout