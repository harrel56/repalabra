const express = require('express')
const app = express()
const port = 3080

app.use(express.static('static'))

app.get('/', (req, res) => {
    res.redirect('/index.html')
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
