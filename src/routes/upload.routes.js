import express from 'express'
import { uploadMiddleware } from '../middleware/uploadFile.js'
import { createUrl } from '../controllers/upload.controller.js'

const router = express.Router()

router.post('/', uploadMiddleware.single('file'), createUrl)

export default router