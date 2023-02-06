import { AuthContext } from '@/context/AuthContext';
import '@/styles/globals.css'
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState({})

  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem("authUser") || '{}'))
  }, []);

  return <AuthContext.Provider value={{user, setUser}}>
    <Component {...pageProps} />
  </AuthContext.Provider>
}
