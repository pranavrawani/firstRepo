const mongoose= require('mongoose');
const personSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type: Number,
        required: true
    },
    work:{
        type: String,
        enum: ['chef', 'waiter', 'manager']
    },
    email:{
        type:String,
        unique:true
    }
})

// Creating person model
const Person= mongoose.model('Person',personSchema);
module.exports= Person;

// {name:"Pranav",
// age:20,
// work:"manager",
// email= "pranavrawani2839@gmail.com"}