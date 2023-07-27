import back_arrow from "../assets/icons/back_arrow.svg"
import add_pet from "../assets/icons/add_pet.svg"
import darkmode from "../assets/icons/darkmode.svg"
import github from "../assets/icons/github.svg"
import logout from "../assets/icons/logout.svg"
import login from "../assets/icons/login.svg"
import logo from "../assets/icons/logo.svg"
import { useLocation, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { setAuth, setUser } from "features/auth/authSlice";
import { useCookies } from 'react-cookie';
import { useAuth } from "../hooks/useAuth"
import { setNotification } from "features/notification/notificationSlice";
import Firebase from "firebase/firebase"
import cl from "./NavigationMobile.module.css"

export default function HeaderMobile() {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [darkTheme, setDarkTheme] = useState(true/*cookies.darkTheme === undefined ? true : cookies.darkTheme*/)
  const auth = useAuth();
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logoutHandler = () => {
    dispatch(setAuth(false))
    dispatch(setUser({}))
    removeCookie("authUser")
    dispatch(setNotification([false, "You are logged out"]))
    Firebase.logout();
  }

  useEffect(() => {
    if(darkTheme === true) {
      document.body.classList.add("body_dark")
    } else {
      document.body.classList.remove("body_dark")
    }
  }, [darkTheme])

  return (
    <div className={cl.navigation}>

      <button disabled={auth ? false : true} className={auth ? cl.btn : cl.btn_disabled} onClick={() => navigate("/my_pets")}>
        <img src={add_pet} alt="add_pet" title="Add pet"/>
      </button>

      <div className={cl.btn} onClick={() => auth ? logoutHandler() : navigate("/login")}>
        <img src={auth ? logout : login} alt={auth ? "logout" : "login"} title={auth ? "Logout" : "Login"}/>
      </div>

      <div className={cl.btn} onClick={() => setDarkTheme(!darkTheme)}>
        <img src={darkmode} alt="darkmode" title="Dark mode"/>
      </div>

      <div className={cl.btn} onClick={() => navigate(-1)}>
        <a className="header__btn" target="_blank" href="https://github.com/dmitry-shul">
          <img src={github} alt="github" title="Github"/>
        </a>
      </div>

    </div>
  );
}