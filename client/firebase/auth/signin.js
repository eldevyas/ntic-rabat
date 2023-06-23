import firebase_app from "../config";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../config";

const auth = getAuth(app);

export default async function firebaseSignin(email, password) {
    let result = null,
        error = null;
    try {
        result = await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }

    return { result, error };
}
