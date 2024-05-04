const express = require('express')
const app = express()
const db= require('./db');
const Person= require('./models/person')
const bodyParser= require('body-parser')
app.use(bodyParser.json());
app.get('/', function (req, res) {
    res.send('Hello World')
})
app.get('/home', (req,res)=>{
    res.send('This is the Home page of the window')
})

app.get('/person', async(req,res)=>{
    try{
        const data= await Person.find();
        res.status(200).json(data)
    } catch(err){
        console.log(err);
        res.status(500).json({error:"internal error"})
    }
})
app.post('/person', async(req,res)=>{
    try{
        const data= req.body
        const newPerson= new Person(data);
        const response= await newPerson.save()
        console.log('data saved');
        res.status(200).json(response)
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
})
app.get('/person/:workType', async(req,res)=>{
    try{
        const workType= req.params.workType;
        if (workType== 'chef' || workType=='waiter' || workType== "manager"){
            const response= await Person.find({work:workType});
            console.log('response fetched');
            res.status(200).json(response)
        }
    } catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
})
app.put('/person/:id', async(req,res)=>{
    try{
        const personId= req.params.id;
        const updatedPersonData= req.body;
        const response = await Person.findByIdAndUpdate(personId,updatedPersonData,{
            new:true,
            runValidators:true
        })
        if (!response){
            return res.status(404).json({error:'Person not found'})
        }
        console.log('data updated');
        res.status(200).json(response)
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server error'})
    }
})
app.delete('/person/:id', async (req,res)=>{
    try{
        const personId= req.params.id;
        const response= await Person.findByIdAndDelete(personId);
        if (!response){
            return res.status(404).json({error:'Person not found'})
        }
        console.log('data delete');
        res.status(200).json({message:"Person Deleted Successfully"})
    } catch(err){
        console.log(err);
        res.status(500).json({error:"Internal Server Error"})
    }
})
// const personRoutes= require('./routes/personRoutes')
// app.use('/person',personRoutes);
app.listen(4000)