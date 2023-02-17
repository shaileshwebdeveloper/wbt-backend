const mongoose = require('mongoose')

// Always use new keyword

const userShema = new mongoose.Schema({

  name : {type : String, required : true},
  email : {type : String, required : true},
  lastname:{type : String, required : true},
  image: {type : String, required : true},
  phone: {type : Number, required : true},
  hours: {type : Number, required : true},
  salarytype: {type : String, required : true},
  salary :{type : Number, required : true},
  department: {type : String, required : true},
 
})


const UserModel = mongoose.model('user', userShema)  

module.exports =  {UserModel}


