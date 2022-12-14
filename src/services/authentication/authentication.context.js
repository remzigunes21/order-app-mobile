import React, { useState, createContext } from "react";

import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();
export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(false);
    if (email === "rem@gmail.com" && password === "1234") {
      const obj = {
        email: "rem@gmail.com",
        password: "1234",
      };
      setUser(obj);
      setIsLoading(false);
    } else {
      setError("error");
      setIsLoading(false);
    }
    // loginRequest(email, password)
    //   .then((u) => {
    //     setUser(u);
    //     setIsLoading(false);
    //   })
    //   .catch((e) => {
    //     setIsLoading(false);
    //     setError(e.toString());
    //   });
  };

  const onRegister = (email, password, repeatedPassword) => {
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      return;
    }
    // firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((u) => {
    //     setUser(u);
    //     setIsLoading(false);
    //   })
    //   .catch((e) => {
    //     setIsLoading(false);
    //     setError(e.toString());
    //   });
  };

  const onLogout = () => {
    setUser(null);
    setIsLoading(false);
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
