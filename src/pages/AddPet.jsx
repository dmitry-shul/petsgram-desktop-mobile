import Button from "../components/UI/button/Button";
import Input from "../components/UI/input/Input";
import FramerSelect from "../components/UI/select/FramerSelect";
import UpLoadFile from "../components/UI/upLoadFile/UpLoadFile";
import PageAnimation from "../hoc/PageAnimation";
import { uid } from "uid";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Firebase from "firebase/firebase";
import BtnLoader from "components/UI/BtnLoader/BtnLoader";
import { useNavigate } from "react-router-dom";
import PhotoList from "components/PhotoList";
import { useGetImageURL } from "hooks/useGetImageURL";


export default function AddPet() {
  const [name, setName] = useState("");
  const [type, setType] = useState("Type");
  const [file, setFile] = useState([]);
  const [delFile, setDelFile] = useState(0);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector(state => state.auth.user)
  const navigate = useNavigate()
  const [src, setSrc] = useState([]);
  const [mainPhoto, setMainPhoto] = useState();
  useGetImageURL(file, src, setSrc)

  //console.log(file[0])

  useEffect(() => {
    setDelFile(delFile + file.length)
  }, [file])

  useEffect(() => {
    setMainPhoto(src[0])
    delFile === 0 && setFile([])
  }, [src])

  useEffect(() => {
    name === "" || type === "Type" || file.length === 0 || delFile !== src.length ? setError(true) : setError(false)
  }, [name, type, file, src])
  
  const addPetDB = async () => {
    setIsLoading(true)
    const id = uid();
    const pet = {
      id,
      name,
      type,
      owner: user.displayName,
      ownerId: user.uid,
      mainPhoto,
      photos: src.map(link => link)
    }
    const pets = await Firebase.getDb("pets");
    !error && Firebase.setDb("pets", [pet, ...pets || []]);
    //const ff = await Firebase.getDb("pets");
    //console.log("ff", user, file, ff)
    setIsLoading(false)
    navigate("/my_pets")
  }

  return (
    <PageAnimation>
      <div className="container__myPets">
        <div className="wrapper__myPets">

          {error && <span style={{color: "#fb5757"}}>* заполните все поля</span>}

          <Input value={name} onChange={(e) => setName(e.target.value)} name="name" type="text" label="Enter pet's name" /> 
          <FramerSelect label="Choose the type of pet" type={type} setType={setType} />
          <UpLoadFile label="Upload a photo of a pet" file={file} setFile={setFile} />
          <Button disabled={error} onClick={() => !error && addPetDB()} type={delFile !== src.length ? "" : "fill"} >{delFile !== src.length ? "Loading photos..." : isLoading ? <BtnLoader/> : "Add new pet"}</Button>
          <PhotoList src={src} setSrc={setSrc} mainPhoto={mainPhoto} setMainPhoto={setMainPhoto} delFile={delFile} setDelFile={setDelFile} />
        </div>     
      </div>
    </PageAnimation>
  );
}
