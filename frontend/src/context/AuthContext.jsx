/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [authContextLoading, setAuthContextLoading] = useState(true);
  const [userAuthData, setUserAuthData] = useState(null);

  useEffect(() => {
    setAuthContextLoading(true);

    fetch("/api/user/getUserdata")
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setUserAuthData(data);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setAuthContextLoading(false);
      });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userAuthData,
        setUserAuthData,
      }}
    >
      {authContextLoading ? (
        <div className="h-screen flex items-center justify-center">
          <span className="loading loading-lg loading-spinner bg-white" />
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
