import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

/*export default function PrivatRoute() {
  const auth = useAuth();
  const location = useLocation()

  return auth ? <Outlet/> : <Navigate to="/login" state={location} replace />;
}*/

export default function PrivatRoute() {
  const auth = useAuth();
  const location = useLocation()

  return (
    <>
      <Outlet/>
      {
        !auth && <Navigate to="/login" state={location} replace />
      }
    </>
  )
}