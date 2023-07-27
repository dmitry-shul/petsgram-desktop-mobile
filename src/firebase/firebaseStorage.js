import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject  } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBD-ruXchZCzgihnYaHKv6Vq_WFfz20rxY",
  authDomain: "pets-75c69.firebaseapp.com",
  databaseURL: "https://pets-75c69-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pets-75c69",
  storageBucket: "pets-75c69.appspot.com",
  messagingSenderId: "37354315116",
  appId: "1:37354315116:web:44e9b437f3d02e68646749",
  measurementId: "G-VY4D733NV9"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);


export default class FirebaseStorage {

  static async uploadStorage(file, id) {
    const metadata = {
      contentType: file.type,
    };
    const storageRef = await ref(storage, 'petsPhoto/' + id + file.name);
    await uploadBytes(storageRef, file, metadata);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  }

  static async deleteObj(obj) {
    const desertRef = ref(storage, 'petsPhoto/' + obj.name);
    await deleteObject(desertRef)
  }

}
