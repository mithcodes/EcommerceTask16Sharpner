import { createContext, useContext, useState } from "react";

const inetialState = {
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
};

const AuthContext = createContext(inetialState);

export const AuthContextProvider = ({ children }) => {
  console.log("Hello");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userLoggedIn, setUserLoggedIn] = useState(
    token == "null" ? false : true
  );

  const loginHandler = (data) => {
    setToken(data.idToken);
    setUserLoggedIn(!!data.idToken);
    localStorage.setItem("token", JSON.stringify(data.idToken));
    localStorage.setItem("logged", true);
    setTimeout(() => {
      localStorage.setItem("token", null);
      localStorage.setItem("logged", false);
    });
  };
  const logoutHandler = () => {
    setUserLoggedIn(false);
    setToken(null);
    localStorage.setItem("token", null);
    localStorage.setItem("logged", false);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  console.log(contextValue);
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

const AuthCxt = () => {
  return useContext(AuthContext);
};

export default AuthCxt;