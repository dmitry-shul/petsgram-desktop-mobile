import { FileUploader } from "react-drag-drop-files";
import cl from "./UpLoadFile.module.css"

export default function UpLoadFile({label, file, setFile}) {

  //console.log(Object.values(file)) 

  return (
    <div>
      <div className={cl.label}>{label}</div>
      <FileUploader
        multiple={true}
        handleChange={(file) => setFile(Object.values(file))}
        name="file"
        types={fileTypes}
        classes={cl.drop_area}
      />
      <p className={cl.p} style={file.length !== 0 ? {color: "#63855E"} : {color: "#6e6e6e"}}>{file.length ? "Files uploaded" : "No files uploaded yet"}</p>
    </div>
  );
}


const fileTypes = ["JPEG", "PNG", "GIF", "BMP", "JPG"];