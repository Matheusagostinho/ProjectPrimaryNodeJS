const connection = require('../database/connection');
const bcrypt = require('bcrypt');


module.exports = {
    async  index(request, response) {
        const association = await connection('association').select('*');
    
        return response.json(association);
    },
    
    
    async create(request, response){
        const {name, email, responsavel, pass, passwordconfirm, whatsapp, end, numend, bairro, city, uf} = request.body;

        const emailExistin = await connection('association')
        .where('email', email)
        .select('email') 
        .first();
        
        if (emailExistin){
            return response.status(400).json({error: 'E-mail já Existe'})
        }
        
        if (pass !== passwordconfirm){
            return response.status(400).json({error: 'Senhas não batem'})
        }

        const password = bcrypt.hashSync(pass, 10);


     await connection('association').insert({
        name, 
        email, 
        responsavel, 
        password, 
        whatsapp, 
        end, 
        numend, 
        bairro, 
        city, 
        uf

    })

    return response.json({});
    }


};