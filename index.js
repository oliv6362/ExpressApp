const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/rost', (req, res) => {
  res.send('Welcome to my survival game ROST!')
})

app.get('/rost/players', (req, res) => {
    res.send('<h1>Rost players</h1> <h3>Number of players online: ???</h3>')

})

app.get('/rost/api/players',(req, res) => {
    res.json({
        "playerName": "",
        "health": 100,
        "Hunger": 100,
        "Thirst": 100,
        "items": [
            {
                "itemName": "rock",
                "damage": 12,
                "durability": 100
            },
            {
                "itemName": "torch",
                "damage": 8,
                "durability": 100,
                "light": "true"
            }
        ]
    })
})

