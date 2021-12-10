import React from 'react';

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [openModal, setOpenModal] = React.useState(false);

  return (
    <AppContext.Provider
      value={{
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
