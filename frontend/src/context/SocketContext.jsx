/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";
import useConversation from "../zustandStore/useConversation";

const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { userAuthData } = useAuthContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    if (userAuthData) {
      const socket = io("https://doconnect.onrender.com", {
        query: {
          userId: userAuthData._id,
        },
      });

      setSocket(socket);

      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userAuthData]);

  useEffect(() => {
    if (!socket) {
      return;
    }

    socket.on("newMessage", (newMessage) => {
      setMessages([...messages, newMessage]);
    });

    return () => socket.off("newMessage");
  }, [socket, messages, setMessages]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocketContext = () => useContext(SocketContext);
