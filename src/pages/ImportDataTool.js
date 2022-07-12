import {Button} from "@mantine/core";
import {nodes} from "../data";
import {db} from "../plugins/firestore";
import {doc, writeBatch} from 'firebase/firestore';

export default function ImportDataTool() {
    const importData = async function () {
        const batch = writeBatch(db);
        for (let id in nodes) {
            const node = nodes[id];
            batch.set(doc(db, 'projects', '1', 'nodes', id), node);

            console.log('set', node, id);
        }

        await batch.commit();

        console.log('after commit');
    };

    return (
      <Button onClick={() => importData()}>Import data</Button>
    );
}