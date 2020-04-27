const connection = require('../database/connection');


module.exports = {
    async  index(request, response) {
        const { page = 1 } = request.query;

        const [count] = await connection('donate').count();

        const donate = await connection('donate')
        .limit(5)
        .offset((page - 1) * 5)
        .select('*');
        
        response.header('X-Total-Count', count['count(*)']);
        return response.json(donate);
    },
    
    
    async create(request, response){
        const {type, description, date, name_res, status} = request.body;

        const {id_association} = request.params;
        const  id_donor = request.headers.authorization;
    
     await connection('donate').insert({
       id_association, 
       id_donor, 
       type, 
       description, 
       date, 
       name_res, 
       status

    })

    return response.json({});
    }


};