import { useLocalStorageValue, useToggle } from "@mantine/hooks";
import React, { createContext, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider(props) {
  // manage theme mode in localstorage
  const [theme, setTheme] = useLocalStorageValue({
    key: "theme-mode",
    defaultValue: "light",
  });

  //   toggle theme mode
  const [value, toggle] = useToggle(theme, ["light", "dark"]);

  useEffect(() => {
    setTheme(value);
    document.querySelector("html").setAttribute("data-theme", value);
  }, [toggle]);

  return <ThemeContext.Provider value={{ theme, toggle }}>{props.children}</ThemeContext.Provider>;
}
