import toast from 'react-hot-toast'

import { notFicStyles } from '../'

const { errorStyle, successStyle } = notFicStyles

const fetchProfileEdited = (newInfo) => {
  const route = "/profile/edit"
  const url = process.env.NODE_ENV !== "development" ? route : "http://localhost:5000" + route

  return fetch(url, {
    method: "POST",
    body: JSON.stringify(newInfo),
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
      toast("Something went wrong!", {
        style: errorStyle
      })
      console.log(err)
    })
}

export default fetchProfileEdited

