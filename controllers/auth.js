const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');
const confoKey = require('../config/config').jwt;
const errorHandler = require('../utils/errorHandler');

module.exports.login = async function(req,res){

    if(!req.body.email || req.body.email.length == 0){
        res.status(409).json({message:"Email is required params"});
    }
    if(!req.body.password){
        res.status(409).json({message:"Password is required params"});
    }

    const candidat = await User.findOne({ email : req.body.email });

    if(candidat){
        const passwordRes = bcrypt.compareSync(req.body.password, candidat.password);
        if(passwordRes){
            // 200
            const token = jsonwebtoken.sign({
                email : candidat.email,
                userId : candidat._id,
            }, confoKey, { expiresIn: 3600 });
            res.status(200).json({
                token : `Bearer ${token}`
            });
        } else {
            // 401
            res.status(401).json({message:"User no finde"});
        }
    } else {
        // 404
        res.status(404).json({message:"User no finde"});
    }
}

module.exports.registre = async function(req,res){
    // const user = new User({
    //     email : req.body.email,
    //     password : req.body.password
    // });
    // user.save().then( ()=>{ console.log( `user created` ); });
    // res.status(200).json(user);

    if(!req.body.email || req.body.email.length == 0){
        res.status(409).json({message:"Email is required params"});
    }
    if(!req.body.password){
        res.status(409).json({message:"Password is required params"});
    }
    if(req.body.password.length < 6){
        res.status(409).json({message:"Min length for password 6 chars"});
    }

    const candidat = await User.findOne({email : req.body.email });

    if(candidat){
        // exist!
        res.status(409).json({message:"Email already exist"});
    } else {
        // create

        const sole = bcrypt.genSaltSync(10);
        const password = req.body.password;

        const user = new User({
            email : req.body.email,
            password : bcrypt.hashSync( password, sole )
        });

        try{
            await user.save();
            res.status(201).json(user);
        } catch (e){
            errorHandler(res,e);
        }
    }
}