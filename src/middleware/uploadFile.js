import multer from "multer";
import path from 'path'
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const path = `${__dirname}/../storage`
        cb(null, path)
    },

    filename: (req, file, cb) => {
        const ext = file.originalname.split('.').pop()
        const filename = `file-${Date.now()}.${ext}`
        cb(null, filename)
    }
})

 
export const uploadMiddleware = multer({storage})