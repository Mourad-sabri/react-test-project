import { useLocalStorageValue } from "@mantine/hooks";
import React from "react";

export const AuthContext = React.createContext();

export function AuthProvider(props) {
  // manage authentication with  local storage
  const [isAuth, setIsAuth] = useLocalStorageValue({
    key: "auth",
    defaultValue: null,
  });

  // handle login

  const login = (user) => {
    setIsAuth(JSON.stringify(user).toString());
  };

  // handle logout

  const logout = () => {
    setIsAuth("null");
  };

  const value = { isAuth: !isAuth || isAuth === "null" ? false : true, login, logout };

  return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>;
}
