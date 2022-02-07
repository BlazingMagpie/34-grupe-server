import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const folder = {};

folder.fullPath = (dir) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    return path.join(__dirname, `../${dir}`);
}

folder.read = async (dir) => {
    try {
        const folderPath = folder.fullPath(dir);
        const fileList = await fs.readdir(folderPath);
        return fileList;
    } catch (error) {
        return false;
    }
}

export { folder };