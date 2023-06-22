import firebase_app from "../config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { app } from "../config";

const auth = getAuth(firebase_app);

export default async function signUp(email, password) {
    const db = getFirestore(app);
    let result = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password);
        await setDoc(doc(db, "usersChat", email), {});
    } catch (e) {
        error = e;
    }

    return { result, error };
}
