const express = require('express')
const path = require('path')
const app = express()
const port = 3000


// const middleware = middleware = (req, res, next)=>{
//     console.log(req);
//     next()
// }

app.use(express.static(path.join(__dirname, 'public')));
// app.use(middleware)

app.get('/hello/:name', (req, res) => {
  res.send('Hello World!' + req.params.name);
})

app.get('/about', (req, res) => {
    // res.sendFile(path.join(__dirname, 'index.html'))
    // res.status(200)
    res.json({'harry':34})
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
