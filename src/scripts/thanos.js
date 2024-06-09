import fs from 'fs/promises';
import path from 'path';
import { PATH_DB } from '../constants/contacts.js';

const THANOS_PROBABILITY = 0.5; 

const thanos = async () => {
    try {

        const data = await fs.readFile(path.resolve(PATH_DB), 'utf8');
        let contacts = JSON.parse(data);


        for (let i = 0; i < contacts.length; i++) {

            if (Math.random() < THANOS_PROBABILITY) {
                console.log(`Deleting contact: ${contacts[i].name}`);
                contacts.splice(i, 1);
                i--;
            }
        }


        await fs.writeFile(path.resolve(PATH_DB), JSON.stringify(contacts, null, 2), 'utf8');

        console.log('Thanos has done his work successfully.');
    } catch (error) {
        console.error('Error executing Thanos:', error);
        throw error;
    }
};


await thanos();

export default thanos;
