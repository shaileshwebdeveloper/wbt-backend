const { UserModel } = require("../models/UserModel")

const getUser = async(req, res) => {      // GET
    const all_user = await UserModel.find()
    res.send(all_user)
}

const addUser = async(req, res) => {       // POST

    //  console.log(res, req.body)
    const add_user = new UserModel(req.body)
    await add_user.save()
    res.send({'msg' : 'added user succesfully'})

 }
 
 const updateUser = async(req, res) =>{     //UPDATE
      
    //  console.log(req.params.id)
   const payload = req.body 
   const user_data = await UserModel.updateOne({_id : req.params.id}, {$set: payload})
    res.send({'msg' : 'user updated succesfully'})

}


const deleteUser =  async(req, res) =>{     //DELETE

    const user_data = await UserModel.deleteOne({_id : req.params.id})
    res.send({'msg' : 'user deleted succesfully'})

}


module.exports = {
    
    getUser,
    addUser,
    updateUser,
    deleteUser

}
