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


export default function Header() {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [darkTheme, setDarkTheme] = useState(true/*cookies.darkTheme === undefined ? true : cookies.darkTheme*/)
  const auth = useAuth();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

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
    <motion.header className="headerContainer" initial="hidden" whileInView="visible" variants={headerAnimation}>
      <div className="header">
        {
          location.pathname !== "/" 
          && 
          <div style={{margin: "0 8px 0 0"}}>
            <button className="header__btn header__backBtn" onClick={() => navigate(-1)}>
              <img src={back_arrow} alt="back" title="Back"/>
            </button>
          </div>
        }

        <ul className="header__ul">
          <li>
            <a className="header__btn" target="_blank" href="https://github.com/dmitry-shul">
              <img src={github} alt="github" title="Github"/>
            </a>
          </li>

          <li>
            <button 
              className="header__btn" 
              onClick={() => setDarkTheme(!darkTheme)}
            >
              <img src={darkmode} alt="darkmode" title="Dark mode"/>
            </button>
          </li>

          <li className="header__logo" onClick={() => location.pathname !== "/" && navigate("/")}>
            <img className="header__logoImage" src={logo} alt="logo" title="Petsgram"/>
            Petsgram
          </li>

          <li>
            <button className="header__btn" onClick={() => auth ? logoutHandler() : navigate("/login")}>
              <img src={auth ? logout : login} alt={auth ? "logout" : "login"} title={auth ? "Logout" : "Login"}/>
            </button>
          </li>

          <li>
            <button disabled={auth ? false : true} className={auth ? "header__btn" : "header__btn header__btn_disabled"} onClick={() => navigate("/my_pets")} >
              <img src={add_pet} alt="add_pet" title="Add pet"/>
            </button>
          </li>
        </ul>

        {
          location.pathname !== "/" && <div  style={{margin: "0 0 0 8px"}}className="header__hiddenBtn"></div>
        }
      </div>
    </motion.header>
  );
}

const headerAnimation = {
  hidden: {
    y: -60,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
}
