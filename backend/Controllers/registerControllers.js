const user = require('../Models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createToken = (id) => {
    return jwt.sign({_id:id},process.env.SECRET_KEY,{expiresIn:'3d'});
}

const signupController = async (req,res) =>{
   let {fullName,email,password} = req.body;
   const salt = await bcrypt.genSalt(10);
   const hashpass = await bcrypt.hash(password,salt);

    try {
        let checkEmail = await user.findOne({email});
        (!fullName || !email || !password ) && res.status(400).send('Fill all fields');
        if (!checkEmail) { 
            await user.create({fullName:fullName, email: email, password: hashpass })
           // user token
           const token = createToken(user._id);
            res.status(200).json({
               signUp: true,
               token: token
            });
        } else throw Error('ERROR: USER ALREADY EXISTS!');        
    }
    catch(err) {
        res.status(400).json({error:err.message})
    }
}

const loginController = async (req,res) => {
    let {email,password} = req.body;
    
    try {
        if (!email || !password ) throw Error('Fill all fields');    
        let loggedUser = await user.findOne({email});
        if (!loggedUser) throw Error('Account not found');
        const match = await bcrypt.compare(password,loggedUser.password);
        
        if (!match) throw Error('Invalid Password');
        const token = createToken(user._id);
        res.status(200).json({
           logIn: true,
           token: token
        });
    } catch (err) {
        res.status(400).json({"error":err.message});
    }

}





module.exports = {signupController,loginController};