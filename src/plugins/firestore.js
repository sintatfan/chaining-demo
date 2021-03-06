import {app} from "./firebase";
import {doc, getDoc, getDocs, collection, getFirestore} from "firebase/firestore";
import omit from "lodash/omit";

export const db = getFirestore(app);

/**
 * Get project meta data
 * (e.g. start time, expiry time)
 *
 * @param projectId
 * @returns {Promise<DocumentData|null>}
 */
export async function getProjectMeta(projectId) {
    const docRef = doc(db, 'projects', projectId);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? docSnap.data() : null;
}

/**
 * Fetch nodes in a project
 *
 * @param projectId
 * @returns {Promise<*[]>}
 */
export async function getNodes(projectId) {
    const collectionRef = collection(db, 'projects', projectId, 'nodes');
    const querySnapshot = await getDocs(collectionRef);

    const nodes = [];
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        const data = doc.data();
        const node = omit(data, ['parent', 'children', 'post_time']);
        node.id = doc.id;

        // Convert Firestore Timestamp to Date object
        if (data.post_time) {
            node.post_time = data.post_time.toDate();
        }

        // Populate parent & children IDs
        if (data.parent) {
            node.parent = data.parent.id;
        }
        if (data.children) {
            console.log(data.children.map(i => i.id));
            node.children = data.children.map(i => i.id);
        }

        nodes.push(node);
    });
    return nodes;
}

export async function getNode(projectId, nodeId) {
    const docRef = doc(db, 'projects', projectId, 'nodes', nodeId);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) return null;

    const data = docSnap.data();
    data.id = docSnap.id;

    // Find ancestors
    if (data.parent) {
        data.parent = data.parent.id;

        const nodes = await getNodes(projectId);
        const ancestors = [];

        let parentId = data.parent;
        while (parentId) {
            const ancestor = nodes.find(i => i.id == parentId);
            if (ancestor) {
                ancestors.push(ancestor);
                parentId = ancestor.parent;
            } else {
                parentId = null;
            }
        }

        data.ancestors = ancestors.reverse();
    }

    return data;
}