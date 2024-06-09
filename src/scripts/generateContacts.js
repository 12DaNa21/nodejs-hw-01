import fs from 'fs/promises';
import path from 'path';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
    try {

        const data = await fs.readFile(path.resolve(PATH_DB), 'utf8');
        const contacts = JSON.parse(data);


        const newContacts = [];
        for (let i = 0; i < number; i++) {
            newContacts.push(createFakeContact());
        }


        const updatedContacts = contacts.concat(newContacts);


        await fs.writeFile(path.resolve(PATH_DB), JSON.stringify(updatedContacts, null, 2), 'utf8');

        console.log(`${number} contacts have been added successfully.`);
    } catch (error) {
        console.error('Error generating contacts:', error);
    }
};


await generateContacts(5);
