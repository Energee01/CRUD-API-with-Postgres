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