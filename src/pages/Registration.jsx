import { useNavigate } from "react-router-dom";
import BtnLoader from "../components/UI/BtnLoader/BtnLoader";
import Button from "../components/UI/button/Button";
import Input from "../components/UI/input/Input";
import PageAnimation from "../hoc/PageAnimation";
import { useState } from "react";
import Firebase from "firebase/firebase";
import { useDispatch } from "react-redux";
import { setAuth, setUser } from "features/auth/authSlice";
import { useFetching } from "../hooks/useFetching";
import { useCookies } from 'react-cookie';
import { setNotification } from "features/notification/notificationSlice";


export default function Registration() {
  const navigate = useNavigate()
  const [userInfo, setUserInfo] = useState({displayName: "", email: "", password: ""}) 
  const {displayName, email, password} = userInfo;
  const dispatch = useDispatch()
  const [cookies, setCookie] = useCookies();

  const [fetchSignup, isLoading, isLoaded, signupError] = useFetching(async () => {
    const user = await Firebase.signup(displayName, email, password);
    const authUser = {
      uid: user.uid,
      token: user.accessToken,
      displayName: user.displayName,
      email: user.email
    };
    dispatch(setAuth(true), setUser(authUser))
    setCookie("authUser", user)
    dispatch(setNotification([true, `You signed up as ${user.displayName}`]))
    //console.log("signup", user, authUser);
  });

  const createUser = async (e) => {
    e.preventDefault()
    fetchSignup();
  }

  const switchToLogin = (e) => {
    e.preventDefault()
    navigate("/login")
  }

  return (
    <PageAnimation>
      <form className="container">
        <div className="wrapper">
          <h1 className="login__title">Create Account</h1>

          {signupError && <span style={{color: "#fb5757"}}>* {signupError.slice(5).split("-").join(" ")}</span>}
          
          <Input value={userInfo.displayName} onChange={(e) => setUserInfo({...userInfo, displayName: e.target.value})} type="text" label="Enter your name" autoComplete="off" />
          <Input value={userInfo.email} onChange={(e) => setUserInfo({...userInfo, email: e.target.value})} type="email" label="Set email" autoComplete="off" />
          <Input value={userInfo.password} onChange={(e) => setUserInfo({...userInfo, password: e.target.value})} type="password" label="Create password" autoComplete="off" />

          <div className="login__buttons">
            <Button disabled={isLoading} type='fill' onClick={(e) => createUser(e)}>{isLoading ? <BtnLoader/> : "CREATE"}</Button>
            <Button disabled={isLoading} type='border' onClick={(e) => switchToLogin(e)} >LOGIN</Button>
          </div>
        </div>
      </form>
    </PageAnimation>
  );
}