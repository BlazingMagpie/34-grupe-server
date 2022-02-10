import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const file = {};

file.fullPath = (dir, fileName) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    return path.join(__dirname, `../${dir}/${fileName}`);
}

file.create = async (dir, fileName, content) => {
    let fileDescriptor = null;
    try {
        const filePath = file.fullPath(dir, fileName);
        fileDescriptor = await fs.open(filePath, 'wx');
        await fs.writeFile(fileDescriptor, JSON.stringify(content));
        return true;
    } catch (error) {
        return 'Klaida kuriant faila';
    } finally {
        if (fileDescriptor) {
            await fileDescriptor.close();
        }
    }
}

file.read = async (dir, fileName) => {
    try {
        const filePath = file.fullPath(dir, fileName);
        const fileContent = await fs.readFile(filePath, 'utf-8');
        return fileContent;
    } catch (error) {
        return false;
    }
}

file.readBinary = async (dir, fileName) => {
    try {
        const filePath = file.fullPath(dir, fileName);
        const fileContent = await fs.readFile(filePath);
        return fileContent;
    } catch (error) {
        return false;
    }
}

file.update = (dir, fileName, content) => {
    console.log('Updating file...');
}

file.delete = (dir, fileName) => {
    console.log('Deleting file...');
}

export { file };