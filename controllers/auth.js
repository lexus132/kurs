module.exports.login = function(req,res){
    console.log( req.body );
    res.status(200).json({
        email : req.body.email,
        password : req.body.password
    });
}

module.exports.registre = function(req,res){
    res.status(200).json({
        message : 'registre'
    });
}