import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageAnimation from "../hoc/PageAnimation";
import { useFetching } from "../hooks/useFetching";
import Firebase from "../firebase/firebase";
import Loader from "../components/UI/loader/Loader";
import NotFoundPage from "./NotFoundPage";
import Gallery from "../components/UI/gallery/Gallery";
import Modal from "../components/UI/modal/Modal";


export default function PetPage() {
  const [pet, setPet] = useState()
  const [visGallery, setVisGallery] = useState(false)
  const [page, setPage] = useState(0)
  const params = useParams()
  const [picLoading, setPicLoading] = useState(true)

  //console.log(pet)

  useEffect(() => {
    !visGallery && setPicLoading(true)
  }, [visGallery])

  const [fetchPosts, isLoading, isLoaded, postError] = useFetching(async () => {
    const pets = await Firebase.getDb("pets");
    const pet = pets.find(pet => pet.id === params.path)
    setPet(pet);
  });

  useEffect(() => {
    fetchPosts();
  }, [])

  if(!pet && isLoaded) {
    return <NotFoundPage/>
  }


  return (
    <PageAnimation style={{width: "100%", display: "flex", justifyContent: "center"}}>
      <div className="petPage">
        {!isLoaded
        ? <Loader />
        : <> 
            <div className="petPage__titleBlock">
                <div>{pet.type}</div>
                <div>
                  <h3>{pet.name}</h3>
                </div>
                <div>{pet.owner}'s</div>
              </div>

              <div className="petPage__photos">
                {
                  pet.photos?.map((photo, i) =>
                    <div key={photo.lastModified + photo.size} className="petPage__photo">
                      <img onClick={() => {
                            setPage(i)
                            setVisGallery(true)
                            setTimeout(() => {
                              setPicLoading(false)
                            }, 200)
                          }
                        } 
                        className="petPage__img" 
                        src={photo.path} 
                        alt={photo.name} 
                      />
                    </div>
                  )
                }
              </div>
          </>
        }
        <Modal visible={visGallery} setVisible={setVisGallery}>
          {
            picLoading 
            ? <Loader />
            : <Gallery pets={pet && pet.photos} page={page} setPage={setPage} />
          }     
        </Modal>
      </div>
    </PageAnimation>
  );
}




const arr = [
  "https://images.ctfassets.net/9l3tjzgyn9gr/photo-112402/cf25fec1eea7ab0665f586b3481e436c/112402-rabbit-lucky-animals-510x600.jpg",
  "https://www.apa.org/images/2020-03-feature-giraffe_tcm7-269465.png",
  "https://www.cbc.ca/kids/images/wild_and_wonderful_asian_animals_header_1140.jpg",
  "https://m3.healio.com/~/media/slack-news/infectious-disease/misc/infographics/2021/12_december/idn1221teres_graphic_01_web.jpg",
  "https://www.rd.com/wp-content/uploads/2021/04/GettyImages-1145794687.jpg"
]