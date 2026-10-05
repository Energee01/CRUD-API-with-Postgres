const userService = require ('../services/userService')


exports.addUser = async (req, res)=>{
    try{

        const {name} = req.body;
        const user = await userService.addUser(name);
        res.status(201).json(user);


    }catch(e){
        res.status(400).json({error : e.message})
    }
}


exports.getAllUsers = async (req, res) =>{
    try{
        const getAll = await userService.getAllUsers()
        res.status(201).json(getAll)

    }catch (e){
        res.json(400).json({
            error: e.message
        })
    }
}

exports.deleteUser = async (req, res)=>{
    try{
        const deletedUser = await userService.deleteUser(parseInt(req.params.id))
       res.json({message: `User ${deletedUser.id} successfully deleted`, user: deletedUser})

    }catch(e){
        res.status(400).json({
            message:`User has already been deleted`,
            error: e.message})
    }
}