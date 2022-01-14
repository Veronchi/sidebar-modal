import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);

  const openModal = () => {
    console.log(111)
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };

  const openSidebar = () => {
    setIsOpenSideBar(true);
  };
  const closeSidebar = () => {
    setIsOpenSideBar(false);
  };

  return (
    <AppContext.Provider
      value={{
        isOpenModal,
        isOpenSideBar,
        openModal,
        closeModal,
        openSidebar,
        closeSidebar
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider }