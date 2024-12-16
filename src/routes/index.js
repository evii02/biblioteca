import { Router } from 'express'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// Obtener el directorio actual
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = Router()

const removeExtencion = (filename) => {
  return filename.split('.').shift()
}

fs.readdirSync(__dirname).filter((filename) => {
  const name = removeExtencion(filename)
  console.log(name)
  if (name !== 'index') {
    import(`./${filename}`)
      .then((module) => {
        router.use(`/${name}`, module.default)
      })
      .catch((err) => {
        console.error(`Error importing ${filename}:`, err)
      })
  }
})

export default router