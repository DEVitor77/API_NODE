import express, { request } from 'express'

const app = express()
app.use(express.json())

const users = []

app.post('/usuarios', (req, res) => {

    users.push(req.body)

    res.send('ok post deu certo')
})

app.get('/usuarios', (req, res) => {
    res.json(users)
})

app.listen(3000)

/*
    1) Tipo de rota/  metodo HTTP
    2) ENDERECO

    mongodb vitoruser
    keys 1jotrrKFHbpui6Iy

*/