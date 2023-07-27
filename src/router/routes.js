import { Navigate } from "react-router-dom";
import AddPet from "../pages/AddPet";
import Login from "../pages/Login";
import Main from "../pages/Main";
import NotFoundPage from "../pages/NotFoundPage";
import PetPage from "../pages/PetPage";
import Registration from "../pages/Registration";

export const routes = [
  {path: "/", login: <Main/>},
  {path: "/:path", login: <PetPage/>},
  {path: "*", login: <Navigate to={<NotFoundPage/>} replace/>},

  {path: "/add_pet", login: <AddPet/>, logout: <Navigate to="/login" replace="true" /> },
  {path: "/login", logout: <Login/>, login: <Navigate to="/" replace="true" />},
  {path: "/registration", logout: <Registration/>, login: <Navigate to="/" replace="true" />},
]





/*export const privatRoutes = [
  {path: "/", element: <Main/>},
  {path: "/add_pet", element: <AddPet/>},
  {path: "/:path", element: <PetPage/>},
  {path: "*", element: <Navigate to={<Main/>} replace/>},
]

export const publicRoutes = [
  {path: "/", element: <Main/>},
  {path: "/login", element: <Login/>},
  {path: "/registration", element: <Registration/>},
  {path: "/:path", element: <PetPage/>},
  {path: "*", element: <Navigate to={<Main/>} replace/>},
]*/