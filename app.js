const express = require('express')
const app = express()

app.use(express.json())

const movies = [
    {
      "id" :1,
      "title": "Pacific Rim",
      "description": "Lorem Ipsum",
      "year": 2012,
      "director": "Guillermo del Toro"
    },

]

let moviesid = 2

app.get('/movies', (application,resp) => {
    resp.json(movies)
})

app.get('/movies/:id',(req,resp) => {
    const id = Number(req.params.id)

    const data = movies.find((x) => x.id === id )

    resp.json(data)
})

app.post('/movies', (req,resp) =>{
    const data = req.body
    const  NewMovie = {
        
            "id" :moviesid++,
            "title": data.title || 'Insert Title',
            "description": data.description || 'Lorem description movie ',
            "year": data.year || 'Year movie',
            "director": data.director || 'Anonimous'
    }
  movies.push(NewMovie)
  resp.json(NewMovie)  
})

app.listen(3000, () => {
    console.log('API funcionando en http://localhost:3000')
})


module.exports = app