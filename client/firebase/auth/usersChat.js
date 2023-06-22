import { doc, getFirestore, setDoc } from "firebase/firestore";

export default async function userChat(email) {
    const db = getFirestore();
    await setDoc(doc(db, "userChat", email), {});
}
