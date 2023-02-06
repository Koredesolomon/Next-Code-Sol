import { createContext } from "react";

export const AuthContext = createContext({})

// sessionStorage only accepts string
// JSON.parse is responsible for converting from string to json