import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

/*export default function AuthRoute() {
  const auth = useAuth();
  const location = useLocation()

  return !auth ? <Outlet/> : <Navigate to={location.state ? location.state.pathname : "/"} replace />;
}*/

export default function AuthRoute() {
  const auth = useAuth();
  const location = useLocation()

  return (
    <>
      <Outlet/>
      {
        auth && <Navigate to={location.state ? location.state.pathname : "/"} replace />
      }
    </>
  )
}