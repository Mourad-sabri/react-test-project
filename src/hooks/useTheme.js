import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider/ThemeProvider";

export function useTheme() {
  return useContext(ThemeContext);
}
