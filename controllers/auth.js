module.exports.login = function(req,res){
    res.status(200).json({
        login : {
            email : req.body.email,
            password : req.body.password
        }
    });
}

module.exports.registre = function(req,res){
    res.status(200).json({
        message : 'registre'
    });
}