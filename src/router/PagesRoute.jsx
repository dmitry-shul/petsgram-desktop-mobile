import { Route, Routes } from "react-router-dom";
import PrivatRoute from "./PrivatRoute";
import { Navigate } from "react-router-dom";
import AddPet from "../pages/AddPet";
import Login from "../pages/Login";
import Main from "../pages/Main";
import NotFoundPage from "../pages/NotFoundPage";
import PetPage from "../pages/PetPage";
import Registration from "../pages/Registration";
import AuthRoute from "./AuthRoute";
import MyPets from "../pages/MyPets";
import AddPetPhoto from "../pages/AddPetPhoto";

export default function PagesRoute() {
  return (
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/:path" element={<PetPage/>} />
      <Route path="*" element={<Navigate to={<NotFoundPage/>} replace/>} />

      <Route element={<AuthRoute/>}>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Registration/>} />
      </Route>

      <Route element={<PrivatRoute/>}>
        <Route path="/my_pets" element={<MyPets/>}></Route>
        <Route path="/my_pets/:petName" element={<AddPetPhoto/>} />
        <Route path="/my_pets/add_pet" element={<AddPet/>} />
      </Route>
    </Routes>
  );
}







/*import { routes } from "./routes";


export default function PagesRoute() {
  const auth = useAuth();

  return (
    <Routes>
      {
        routes.map(route => 
          <Route  
            path={route.path} 
            element={!route.logout ? route.login : auth ? route.login : route.logout} 
            key={route.path} 
          />
        )
      }
    </Routes>
  );
}*/