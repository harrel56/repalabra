const express = require('express');
const app = express();
const port = 3080;

app.set('view engine', 'pug');
app.use(express.static('static'));

app.get('/*', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
