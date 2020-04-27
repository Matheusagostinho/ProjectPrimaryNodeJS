const connection = require('../database/connection');


module.exports = {
    async  index(request, response) {
        
        const  id_donor = request.headers.authorization;
        const donate = await connection('donate')
        .where('id_donor', id_donor)
        .select('*');
        
        
        
        return response.json(donate);
    }


};