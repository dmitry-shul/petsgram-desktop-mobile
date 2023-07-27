import "./App.css";
import "./AppMobile.css";
import Header from "./components/Header";
import HeaderMobile from "./components/HeaderMobile";
import NavigationMobile from "./components/NavigationMobile";
import PagesRoute from "./router/PagesRoute";
import { useCookies } from 'react-cookie';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuth, setUser } from "features/auth/authSlice";
import Notification from "./components/Notification";
import { toast } from "react-toastify";


export default function App() {
  const [cookies] = useCookies();
  const dispatch = useDispatch()
  const [isNotification, notificationMessage] = useSelector(state => state.notification.notification)
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    if(cookies.authUser) {
      dispatch(setAuth(true))
      dispatch(setUser(cookies.authUser))
    }
  }, [])
  
  useEffect(() => {
    isNotification 
    ? toast.success(notificationMessage, { delay: 1000 })
    : toast.info(notificationMessage)
  }, [notificationMessage])

  useEffect(() => {
    window.addEventListener('resize',() => {
      setWidth(window.innerWidth)
    });

    return () => window.removeEventListener('resize');
  }, [])

  return (
    <div className="App">
      <Notification />
      {width <= 650 ? <HeaderMobile /> : <Header />}
      <PagesRoute />
      {width <= 650 ? <NavigationMobile /> : null}
    </div>
  );
}