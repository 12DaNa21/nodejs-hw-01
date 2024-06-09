import fs from 'fs/promises';
import path from 'path';
import { PATH_DB } from '../constants/contacts.js';

const getAllContacts = async () => {
    try {

        const data = await fs.readFile(path.resolve(PATH_DB), 'utf8');
        const contacts = JSON.parse(data);
        return contacts;
    } catch (error) {
        if (error.code === 'ENOENT') {

            return [];
        } else {
            throw error;
        }
    }
};

export default getAllContacts;


console.log(await getAllContacts());
