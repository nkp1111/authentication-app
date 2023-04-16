import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [data, setData] = useState("initial value");
  return (
    <AppContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export { AppProvider }
export default useGlobalContext