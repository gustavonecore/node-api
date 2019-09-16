
exports.up = function(knex, Promise) {
	return knex.schema
		.createTable('node1', function (table) {
			table.increments('id');
			table.string('first_name', 255).notNullable();
			table.string('last_name', 255).notNullable();
		})
		.createTable('node2', function (table) {
			table.increments('id');
			table.decimal('price').notNullable();
			table.string('name', 1000).notNullable();
		});
};

exports.down = function(knex, Promise) {
	return knex.schema
		.dropTable("node1")
		.dropTable("node2");
};
