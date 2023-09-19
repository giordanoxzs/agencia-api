import express, { Router, request, response } from 'express'

const app = express()
const router = Router()

// Configurando o Express
app.use(express.json()) // Configurando para receber JSON
app.use(router)

type Pessoas = {
  nome: string
  email: string
}
const listPessoas: Pessoas [] = []

// GET, POST, PUT, DELETE, PATCH
router.get('/', (request, response) =>
  response.json({ ola: 'Ola mundo', nome: 'Glêsio' }))

router.post('/formulario', (request, response) => { 
  // nome, email
  const { nome, email } = request.body
  listPessoas.push({nome: request.body.nome, email: request.body.email })
  return response.json().status(201) //CREATED
})

router.get("/carregar", (request, response) => {

  listPessoas.push({ nome: 'Lucas', email: 'lucasgazao@gmail.com'})
  listPessoas.push({nome: 'Yasmin', email: 'yasmintunder@gmail.com'})
  listPessoas.push({nome: 'Lana del rey', email: 'Lanadelrey@gmail.com'})
  
  return response.json({ list : listPessoas})
})
app.listen(3000, () => { console.log('Running port 3000') })
