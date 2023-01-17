import React from 'react'

const AppContext = React.createContext();
const AppProvider=({children})=>
{
     
  return (
    <div>
        <AppContext.Provider value="Abhishek">
            {children}
        </AppContext.Provider>


    </div>
  )
}

export {AppContext, AppProvider}