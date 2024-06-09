import fs from 'fs/promises';
import path from 'path';
import { PATH_DB } from '../constants/contacts.js';

const removeAllContacts = async () => {
    try {
        
        await fs.writeFile(path.resolve(PATH_DB), '[]', 'utf8');
        console.log('All contacts have been removed successfully.');
    } catch (error) {
        console.error('Error removing contacts:', error);
        throw error;
    }
};


await removeAllContacts();

export default removeAllContacts;
