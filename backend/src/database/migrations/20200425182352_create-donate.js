
exports.up = function(knex) {
    return knex.schema.createTable('donate', function(table){
        table.increments('id');
        table.integer('id_association').notNullable();
        table.integer('id_donor').notNullable();
        table.string('type').notNullable();
        table.text('description').notNullable();
        table.date('date').notNullable();
        table.string('name_res');
        table.string('status', 2).notNullable();

        table.foreign('id_association').references('id').inTable('association');
        table.foreign('id_donor').references('id').inTable('donor');

    });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('donate');
  
};
