const fs = require('fs/promises');
const path = require('path');

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

module.exports = folder;