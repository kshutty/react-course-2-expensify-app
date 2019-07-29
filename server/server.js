const path = require('path')
const express = require('express')
// create express application
const app = express()
const publicPath = path.join(__dirname, '..', 'public')
// if on heroku uses process.env.PORT if not localhost:3000
const port = process.env.PORT || 3000
// use public directory
app.use(express.static(publicPath))
// if what the person requested isn't in the public folder throw index.html
app.get('*', (req, res) =>{
res.sendFile(path.join(publicPath, 'index.html'))
})
// start up on port 3000
app.listen(port, () =>{
    console.log('server is up')
})