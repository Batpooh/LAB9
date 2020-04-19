let express = require('express')
let app = express()
let PORT = 3000;

app.get('/',(req,res) => {
    console.log('Hello World')
    res.send('Hello World')
})

app.get('/crash', (req,res) => {
    console.log('Crash!!')
    res.send('Crash')
    process.exit(1)
})

app.listen(PORT, () => console.log("server is running", PORT));