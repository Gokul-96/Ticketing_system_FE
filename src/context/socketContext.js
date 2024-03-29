import React from "react";
import io from "socket.io-client";

const SocketContext = React.createContext();

const socket = io(process.env.REACT_APP_API_URL); 

const SocketProvider = ({ children }) => {
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export { SocketContext, SocketProvider };