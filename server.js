const express = require('express')
const app = express()
const port = 3000
const swig = require('swig')

app.engine('html', swig.renderFile)
app.set('view engine', 'html')
app.set('views', __dirname + '/views')

app.use(express.urlencoded({
    extended: true
}))

app.get('/', (request, response) => {
  response.render('index')
})

app.post('/name', (request, response) => {
    response.render('name', { name: request.body.name })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})