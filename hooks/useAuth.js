import { AuthContext } from "@/context/AuthContext"
import { useContext } from "react"
import {  decode } from "jsonwebtoken"

const useAuth = () => {

    const { user, setUser } = useContext(AuthContext)

    // Responsible for saving the token on the browser
    // Calls setToken from context and puts new token there
    const login = (token) => {
        const newUser = decode(token, {json: true})
        newUser.token = token
        sessionStorage.setItem("authUser", JSON.stringify(newUser))
        setUser(newUser)
    }

    // Deletes the token from the browser
    const logout = () => {
        sessionStorage.removeItem("authUser")
        setUser()
    }

    // Gets the token from the browser
    const getToken = () => {
        return user.token
    }

    const getUser = () => user

    // Checks whether the person is logged in by checking if the token exists
    const isLoggedIn = () => !!getToken()

    return {
        login,
        logout,
        getToken,
        isLoggedIn,
        getUser
    }
}

export default useAuth