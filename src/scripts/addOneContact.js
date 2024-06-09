import fs from 'fs/promises';
import path from 'path';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const addOneContact = async () => {
    try {

        let contacts = [];
        try {
            const data = await fs.readFile(path.resolve(PATH_DB), 'utf8');
            contacts = JSON.parse(data);
        } catch (error) {
            if (error.code === 'ENOENT') {
                console.log('File not found. Creating a new one...');
            } else {
                throw error;
            }
        }


        const newContact = createFakeContact();


        contacts.push(newContact);


        await fs.writeFile(path.resolve(PATH_DB), JSON.stringify(contacts, null, 2), 'utf8');

        console.log('One contact has been added successfully.');
    } catch (error) {
        console.error('Error adding contact:', error);
    }
};

await addOneContact();
