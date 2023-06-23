import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { app } from "../config";

const auth = getAuth(app);

export default async function signUp(email, password, username) {
    const db = getFirestore(app);
    let result = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password);
        try {
            await setDoc(doc(db, "usersChat", username), {});
        } catch (e) {
            error = e;
        }
    } catch (e) {
        error = e;
    }

    return { result, error };
}
