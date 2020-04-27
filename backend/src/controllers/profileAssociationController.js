const connection = require('../database/connection');


module.exports = {
    async  index(request, response) {
        
        const  id_association = request.headers.authorization;
        const donate = await connection('donate')
        .where('id_association', id_association)
        .select('*');
        
        
        
        return response.json(donate);
    }


};