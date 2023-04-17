import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [userData, setUserData] = useState({});

  return (
    <AppContext.Provider
      value={{
        userData,
        setUserData,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export { AppProvider }
export default useGlobalContext