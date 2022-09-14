const User = require('../models/User');

module.exports = {
    async store(req,res){
        const { email, name } = req.body;

        const user2 = {
            name,
            email,
        }

        if(await User.findOne({email:email})){
            return res.status(400).send({erro: "user already exists"});
        }

        try{
            const user = await User.create(user2);

            return res.jon(user);
        }catch (err){
            return res.status(400).send({erro: 'registration failed'});
        }

    },

    async update(req,res){
        
    }
}