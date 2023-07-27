import UpLoadFile from "../components/UI/upLoadFile/UpLoadFile";
import Button from "../components/UI/button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import PageAnimation from "../hoc/PageAnimation";
import Firebase from "firebase/firebase";
import { useFetching } from "hooks/useFetching";
import { useEffect, useState } from "react";
import Loader from "components/UI/loader/Loader";
import PhotoList from "components/PhotoList";
import BtnLoader from "components/UI/BtnLoader/BtnLoader";
import { useGetImageURL } from "hooks/useGetImageURL";


export default function AddPetPhoto() {
  const { pathname } = useLocation()
  const [userPet, setUserPet] = useState()
  const [file, setFile] = useState([]);
  const [delFile, setDelFile] = useState(0);
  const [pets, setPets] = useState();
  const [isLoadingToDB, setIsLoadingToDB] = useState(false);
  const navigate = useNavigate()
  const [src, setSrc] = useState([]);
  const [mainPhoto, setMainPhoto] = useState();
  useGetImageURL(file, src, setSrc)


  const [fetchPosts, isLoading, isLoaded, postError] = useFetching(async () => {
    const pets = await Firebase.getDb("pets");
    setPets(pets)
    const pts = pets.find(pet => pet.id === pathname.slice(9))
    setSrc(pts.photos)
    setDelFile(file.length + pts.photos.length)
    setMainPhoto(pts.mainPhoto)
    setUserPet(pts)
  });

  useEffect(() => {
    setDelFile(file.length + src.length)
  }, [file])
  
  useEffect(() => {
    fetchPosts();
  }, []) 

  const addPetPhotoDB = () => {
    setIsLoadingToDB(true)
    const pet = {
      ...userPet,
      mainPhoto,
      photos: src.map(photo => photo)
    }
    const arr = pets.filter(pet => pet !== userPet)
    console.log("test", src)
    if(src.length === 0) {
      Firebase.setDb("pets", [...arr]);
    } else {
      Firebase.setDb("pets", [pet, ...arr]);
    }
    setIsLoadingToDB(false)
    navigate("/my_pets")
  }
  console.log(src)
  return (
    <PageAnimation>
        <div className="container__myPets">
          {
            !isLoaded
            ? <Loader/>
            : <div className="wrapper__myPets">
                <h2 style={{color: "#4e7548"}}>{userPet?.name}</h2>
                <UpLoadFile label={`Upload a photo of a ${userPet?.name}`} file={file} setFile={setFile} />
                <Button disabled={delFile !== src.length} onClick={addPetPhotoDB} type={delFile !== src.length ? "" : "fill"}>{delFile !== src.length ? "Loading photos..." : isLoadingToDB ? <BtnLoader/> : "Save"}</Button>
                <PhotoList src={src} setSrc={setSrc} mainPhoto={mainPhoto} setMainPhoto={setMainPhoto} delFile={delFile} setDelFile={setDelFile} />
              </div>
          }     
        </div>
    </PageAnimation>
  );
}






/*const handler1 = async () => {
    const aa = await Firebase.getDb("test")
    setSrc(aa)
    console.log(aa)
  }

  const handler2 = () => {
    Firebase.setDb("test", src)
  }*/