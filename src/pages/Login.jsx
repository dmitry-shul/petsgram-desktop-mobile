import { useNavigate } from "react-router-dom";
import BtnLoader from "../components/UI/BtnLoader/BtnLoader";
import Button from "../components/UI/button/Button";
import Input from "../components/UI/input/Input";
import PageAnimation from "../hoc/PageAnimation";
import { useState } from "react";
import Firebase from "firebase/firebase";
import { useDispatch } from "react-redux";
import { setAuth, setUser } from "features/auth/authSlice";
import { setNotification } from "features/notification/notificationSlice";
import { useCookies } from 'react-cookie';
import { useFetching } from "../hooks/useFetching";

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("") 
  const [password, setPassword] = useState("") 
  const dispatch = useDispatch()
  const [cookies, setCookie] = useCookies();


  const [fetchLogin, isLoading, isLoaded, loginError] = useFetching(async () => {
    const user = await Firebase.login(email, password);
    const authUser = {
      uid: user.uid,
      token: user.accessToken,
      displayName: user.displayName,
      email: user.email
    };
    dispatch(setAuth(true))
    dispatch(setUser(authUser))
    setCookie("authUser", user)
    dispatch(setNotification([true, `You are signed in as ${user.displayName}`]))
    //console.log("login", user, authUser)
  });

  const loginUser = async (e) => {
    e.preventDefault()
    fetchLogin();
  }

  const switchToRegistration = (e) => {
    e.preventDefault()
    navigate("/signup")
  }

  return (
    <PageAnimation>
      <form className="container">
        <div className="wrapper">
          <h1 className="login__title">Login To Account</h1>

          {loginError && <span style={{color: "#fb5757"}}>* {loginError.slice(5).split("-").join(" ")}</span>}
          
          <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" label="Email" autoComplete="email" />
          <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" label="Password" autoComplete="current-password" />

          <div className="login__buttons">
            <Button disabled={isLoading} type='fill' onClick={(e) => loginUser(e)}>{isLoading ? <BtnLoader/> : "LOGIN"}</Button>
            <Button disabled={isLoading} type='border' onClick={(e) => switchToRegistration(e)} >SIGN UP</Button>
          </div>
        </div>
      </form>
    </PageAnimation>
  );
}