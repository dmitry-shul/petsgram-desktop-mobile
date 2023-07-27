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
import cl from "./HeaderMobile.module.css"

export default function HeaderMobile() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className={cl.header}>
      
      {
        location.pathname !== "/" && 
        <div className={cl.backBtn} onClick={() => navigate(-1, {replace: true})}>
          <img src={back_arrow} alt="back" title="Back"/>
        </div>
      }

      <div style={location.pathname === "/" ? {width: "100%"} : null} className={cl.logoConteiner} onClick={() => location.pathname !== "/" && navigate("/")}>
        <img className={cl.logo} src={logo} alt="logo" title="Petsgram"/>
      </div>

      {
        location.pathname !== "/" && 
        <div className={cl.hiddenBtn}></div>
      }
    </div>
  );
}