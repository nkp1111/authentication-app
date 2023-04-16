import React, { useEffect } from 'react'
import useGlobalContext from './context'

const App = () => {

  const { data, setData } = useGlobalContext()
  useEffect(() => {
    let url = process.env.NODE_ENV !== "development" ? "/" : "http://localhost:5000/"

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data.home)
      }).catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      App <br />
      {data}
    </div>
  )
}

export default App

