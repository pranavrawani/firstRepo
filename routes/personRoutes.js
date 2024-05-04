const express= require('express');
const router= express.Router();
const Person= require('./models/person')

// router.get('/', async(req,res)=>{
//     try{
//         const data= await Person.find();
//         res.status(200).json(data)
//     } catch(err){
//         console.log(err);
//         res.status(500).json({error:"internal error"})
//     }
// })
// router.post('/', async(req,res)=>{
//     try{
//         const data= req.body
//         const newPerson= new Person(data);
//         const response= await newPerson.save()
//         console.log('data saved');
//         res.status(200).json(response)
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({error:'Internal Server Error'});
//     }
// })
// router.get('/:workType', async(req,res)=>{
//     try{
//         const workType= req.params.workType;
//         if (workType== 'chef' || workType=='waiter' || workType== "manager"){
//             const response= await Person.find({work:workType});
//             console.log('response fetched');
//             res.status(200).json(response)
//         }
//     } catch(err){
//         console.log(err);
//         res.status(500).json({error:'Internal Server Error'});
//     }
// })

module.exports= router;