'use strict'

const express = require("express")
const app = express()
app.use(express.json())

require('dotenv').config()
const PORT = process.env.PORT

const url = 'https://api.quotable.io/quotes/random?tags='
const category = 'inspirational'
// Some more possible categories: education, knowledge, wisdom
// Syntax for including multiple categories: url + cat1,cat2,cat3,...


async function getQuote(url) {
  try {
    const response = await fetch(url)
    const quote = await response.json()

    // Pull useful info from returned JSON object
    const resQuote = {
      content: quote[0].content, 
      author: quote[0].author, 
      source: "https://api.quotable.io"}
    return resQuote
  }
  catch(error) {
    console.error(error)
  }}


// Send quote object to endpoint
app.get('/quote', (req,res) => { 
  getQuote(url + category).then(quote => res.send(quote))
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
})