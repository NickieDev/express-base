import express from 'express'
import helmet from 'helmet'
import path from 'path'

const server = express()

server.use(helmet())

server.use(express.json())

server.use(express.urlencoded({ extended: true })) 

server.use(express.static(path.join(__dirname, '../public')))

server.get('/', async(req, res) => {
   let name = 'Nick'
   let age = 20

   res.json({ name, age })
})

server.listen(3001, () => {
   console.log('Servidor iniciado')
})