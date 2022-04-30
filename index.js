const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.port ||   5000;


app.use(cors())
app.use(express.json());
app.get('/' , (req , res) =>{
    res.send('Node code i i can')

})

const users = [
    {id:1, name:'rafsan', email:'rafsan@gmail,.com', phone:'017814569'},
    {id:2, name:'ahmed', email:'ahmed@gmail,.com', phone:'017814569'},
    {id:3, name:'raj', email:'raj@gmail,.com', phone:'017814567'},
    {id:4, name:'rafsa', email:'rafsa@gmail,.com', phone:'0178634569'},
    {id:5, name:'rafan', email:'rafan@gmail,.com', phone:'014814569'},
    {id:6, name:'rfsan', email:'rfsan@gmail,.com', phone:'018814569'},
]

app.get('/user/:id' , (req , res) =>{
    console.log(req.params);
    const id = req.params.id;
    const user = users.find(u => u.id == id);
    res.send(user)
})



app.get('/users' , (req , res) =>{
   if(req.query.name){
       const search = req.query.name.toLowerCase;
       const matched = users.filter(user => user.name.toLowerCase().includes(search))
       res.send(matched);


   }
   else{
    res.send(users);
   }
    
})
app.post('/user' , (req, res)=>{
    console.log('request' , req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})

app.listen(port, () =>{
    console.log('listen port' , port)

})