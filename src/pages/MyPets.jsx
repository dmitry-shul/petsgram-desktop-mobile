import Loader from "components/UI/loader/Loader";
import Firebase from "firebase/firebase";
import { useFetching } from "hooks/useFetching";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Button from "../components/UI/button/Button";
import PageAnimation from "../hoc/PageAnimation";

export default function MyPets() {
  const navigate = useNavigate()
  const [userPets, setUserPets] = useState()
  const [cookies] = useCookies();
  
  const [fetchPosts, isLoading, isLoaded, postError] = useFetching(async () => {
    const pets = await Firebase.getDb("pets");
    const pts = pets.filter(pet => pet.ownerId === cookies.authUser.uid)
    setUserPets(pts)
  });

  useEffect(() => {
    fetchPosts();
  }, [])

  return (
    <PageAnimation>
      <div className="container__myPets">
        {
          !isLoaded 
          ? <Loader />
          : <div className="wrapper__myPets">
            {
              userPets?.map((pet, index) =>
                <Button key={pet.id} onClick={() => navigate(`/my_pets/${pet.id}`)} >{pet.name}</Button>
              )
            }
            <Button type="fill" onClick={() => navigate("/my_pets/add_pet")} >Add new pet</Button>        
          </div>
        }     
      </div>
    </PageAnimation>
  );
}