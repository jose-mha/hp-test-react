import React from 'react';

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [openModal, setOpenModal] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [showFavorites, setShowFavorites] = React.useState(false);
  const [countfavorites, setCountFavorites] = React.useState(0);
  const [message, setMessage] = React.useState('');

  return (
    <AppContext.Provider
      value={{
        openModal,
        setOpenModal,
        openDialog,
        setOpenDialog,
        showFavorites,
        setShowFavorites,
        countfavorites,
        setCountFavorites,
        message,
        setMessage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
