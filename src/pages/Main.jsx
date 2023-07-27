import { useNavigate } from "react-router-dom";
import PetCard from "../components/PetCard";
import Loader from "../components/UI/loader/Loader";
import { useFetching } from "../hooks/useFetching";
import Firebase from "../firebase/firebase";
import { useEffect, useState } from "react";


export default function Main() {
  const navigate = useNavigate()
  const [pets, setPets] = useState([])


  const [fetchPosts, isLoading, isLoaded, postError] = useFetching(async () => {
    const pets = await Firebase.getDb("pets");
    setPets(pets)
  });
  
  useEffect(() => {
    fetchPosts();
  }, [])

  return (
    <div className="main">
      {!isLoaded 
      ? <Loader />
      : pets?.map((pet, index) =>
        <PetCard 
          pet={pet}
          custom={index + 1}
          key={pet.id} 
          onClick={() => navigate(`/${pet.id}`)}
        />  
      )}
    </div>
  );
}