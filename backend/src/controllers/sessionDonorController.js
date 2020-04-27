const connection = require('../database/connection');
const bcrypt = require('bcrypt');

module.exports = {
    async  create(request, response) {
        
        const  {email} = request.body;
        const  {pass} = request.body;

        const donorEmail = await connection('donor')
        .where('email', email)
        .select('id')
        .first();

        if(!donorEmail){
            return response.status(400).json({error: 'No Donor found with this EMAIL'})
        }

        const password = await connection('donor')
        .where('email', email)
        .select('password')
        .first();

        
        if(!bcrypt.compareSync(pass, password.password)){
            return response.status(406).json({error: 'Passaword Error'})
            
        }

        

        const donor = await connection('donor')
        .where('email', email)
        .select('id')
        .first();

        //if(!donor){
         //   return response.status(406).json({error: 'Passaword Error'})
        //}


        
        return response.json(donor);
    }


};