import fs from 'fs/promises';
import path from 'path';
import { PATH_DB } from '../constants/contacts.js';

const countContacts = async () => {
    try {
        const data = await fs.readFile(path.resolve(PATH_DB), 'utf8');
        const contacts = JSON.parse(data);
        return contacts.length;
    } catch (error) {
        if (error.code === 'ENOENT') {
            return 0;
        } else {
            console.error('Error counting contacts:', error);
            throw error;
        }
    }
};
export default countContacts;
console.log(await countContacts());
