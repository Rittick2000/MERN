const express = require('express') // importing exporess js
const app = express() // initializing app using express
const port = 3000
const item=require('./route/item.js')

// listning on app, on port 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use('/api',item);


//get request
// app.get('/', (req, res) => {
//     res.send('got a GET request');
//   })

// app.post('/items',(req,res)=>{
//     res.send('got a POST request');
// })

// app.put('/items/:id',(req,res)=>{
//     res.send("got a PUT request");
// })

// app.delete('/items/:id',(req,res)=>{
//     res.send("got a delete request");
// })
