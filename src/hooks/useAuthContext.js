import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider/AuthProvider";

export function useAuthContext() {
  return useContext(AuthContext);
}
