import FirebaseStorage from "firebase/firebaseStorage"


export default function PhotoList({src, setSrc, mainPhoto, setMainPhoto, delFile, setDelFile}) {

  const makeMainPhoto = (s) => {
    setMainPhoto(s)
  }

  const removePhoto = (s) => {
    const newSrc = src.filter(ph => ph !== s)
    setSrc(newSrc)
    setDelFile(delFile - 1)
    if(s.path === mainPhoto.path) {
      setMainPhoto(newSrc[0])
    }
    FirebaseStorage.deleteObj(s)
  }

  //console.log(src)

  return (
    <div className="addPrtPhoto__photoList">
      {
        src && src.map((s, i) => 
          <div className="addPrtPhoto__images" key={s.size + s.lastModified}>
            <div className="addPrtPhoto__btns">
              <div className="addPrtPhoto__btn" onClick={() => makeMainPhoto(s)} style={{borderRadius: "10px 0 0 10px"}}>
                <span className={["addPrtPhoto__btnIcon", "addPrtPhoto__btnIconStar", mainPhoto?.path === s.path ? "addPrtPhoto__btnIconStar_active" : ""].join(" ")}>★</span>
              </div>
              <div className="addPrtPhoto__btn" onClick={() => removePhoto(s)} style={{borderRadius: "0 10px 10px 0"}}>
                <span className="addPrtPhoto__btnIcon addPrtPhoto__btnIconDelete">✖</span>
              </div>
            </div>
            <img className="addPrtPhoto__img" src={s.path} alt={s.name} />
          </div>
        )
      }
    </div>
  );
}