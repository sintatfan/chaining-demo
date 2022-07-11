import {app} from "./firebase";
import {doc, getDoc, getFirestore} from "firebase/firestore";

export const db = getFirestore(app);

export async function getProjectMeta(projectId) {
    const docRef = doc(db, 'projects', projectId);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? docSnap.data() : null;
}
