import fs from 'fs/promises';
import path from 'path';

const folder = {};

folder.fullPath = (dir) => {
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