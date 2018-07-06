exports.up = function(knex, Promise) {
  return knex.schema.createTable("backgrounds", table => {
    table.increments("id").primary();
    table.string("title");
    table.string("description");
    table.text("url");
    table.text("text");
    table.string("contributor");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("backgrounds");
};
