import {app} from "./firebase";
import {doc, getDoc, getDocs, collection, getFirestore} from "firebase/firestore";

export const db = getFirestore(app);

export async function getProjectMeta(projectId) {
    const docRef = doc(db, 'projects', projectId);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? docSnap.data() : null;
}

export async function getTree(projectId) {
    const collectioRef = collection(db, 'projects', projectId, 'nodes');
    const querySnapshot = await getDocs(collectioRef);
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
    return [];
}
