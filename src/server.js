import express from 'express'
import morgan from 'morgan'
import path from 'path'
import router from './routes/index.js'
import { fileURLToPath } from 'url'
import cors from 'cors'

export const server = express()

server.use(morgan('dev'))
server.use(express.json())
server.use(cors('*'))

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

server.use(express.static(path.join(__dirname, 'storage')))

server.use('/api', router)