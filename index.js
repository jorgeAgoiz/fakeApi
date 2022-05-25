const { faker } = require("@faker-js/faker")
const express = require("express")
const cors = require("cors")

const app = express()
const PORT = 3006

app.use(cors())

// GET -> /reviews
app.get('/reviews', (req, res) => {
    // Number of users with reviews (Max 5)
    const users = Math.floor(Math.random() * 5) + 1
    // Random recall value
    const recall = faker.datatype.boolean()

    const reviews = []
    for (let i = 0; i < users; i++) {
        const newUser = {
            name: faker.name.findName(),
            rate: faker.datatype.number({ max: 5 })
        }
        reviews.push(newUser)
    }
    
    return res.json({reviews, recall})
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})