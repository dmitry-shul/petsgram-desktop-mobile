import { initializeApp } from "firebase/app";
import { getDatabase, set, ref, child, get } from "firebase/database"
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut   } from "firebase/auth";


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
const db = getDatabase(app);
const dbRef = ref(getDatabase());
const auth = getAuth();


export default class Firebase {

  static setDb(name, obj) {
    set(ref(db, name), obj);
  }

  static async getDb(name) {
    const snapshot = await get(child(dbRef, name));
    return snapshot.val();
  }

  static async login(email, password) {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  }

  static async logout() {
    await signOut(auth);
  }

  static async signup(displayName, email, password) {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(auth.currentUser, {displayName: displayName});
      return userCredential.user;
  }

}





















/*const result = {
      user: null,
      error: null,
    }
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      result.user = userCredential.user;
    } catch (error) {
      result.error = error.code;
    }
    return result*/


    /*const result = {
        user: null,
        error: null,
      }
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        await updateProfile(auth.currentUser, {displayName: {name: displayName, darkTheme: true, pets: ["ubPcTbU27Z", "kdPjL7jDnu"]} });
        result.user = userCredential.user;
      } catch (error) {
        result.error = error.code;
      }
      return result;
    }*/





/*export const setToDb = (name) => {
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const id = uid();
  set(ref(db, name), {
    name: "Pete",
    id,
  });
  console.log("set")
}


export const getFromDb = (name) => {
  const dbRef = ref(getDatabase());
  get(child(dbRef, name)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
  console.log("get")
} */