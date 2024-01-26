const express = require('express')
const app = express()
const apiRoutes = require('./src/routes/apiRoutes')
const PORT = 3000

app.use(express.json())
app.use('/api', apiRoutes)

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}!`);
})