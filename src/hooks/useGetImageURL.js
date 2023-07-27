import { useMemo } from "react";
import FirebaseStorage from "../firebase/firebaseStorage";
import { uid } from "uid";


export const useGetImageURL = (file, src, setSrc) => {
  useMemo(async () => {
    for(let i=0; i<file.length; i++) {
      const id = uid();
      const downloadURL = await FirebaseStorage.uploadStorage(file[i], id);
      setSrc(prev => [...prev, {path: downloadURL, size: file[i].size, name: id + file[i].name, lastModified: file[i].lastModified}])
    }
  }, [file])
}