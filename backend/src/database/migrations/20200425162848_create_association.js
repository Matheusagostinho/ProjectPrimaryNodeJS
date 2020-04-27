
exports.up = function(knex) {
    return knex.schema.createTable('association', function(table){
        table.increments('id');
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('responsavel').notNullable();
        table.string('password').notNullable();
        table.string('whatsapp').notNullable();
        table.string('end').notNullable();
        table.string('numend').notNullable();
        table.string('bairro').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();

    });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('association');
  
};
