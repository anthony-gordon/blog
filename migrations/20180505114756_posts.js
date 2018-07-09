exports.up = function(knex, Promise) {
  return knex.schema.createTable("posts", table => {
    table.increments("id").primary();
    table.string("title");
    table.string("description");
    table.text("url");
    table.text("paragraph1");
    table.text("paragraph2");
    table.text("paragraph3");
    table.text("paragraph4");
    table.text("paragraph5");
    table.text("paragraph6");
    table.text("paragraph7");
    table.text("paragraph8");
    table.string("contributor");
    table.date("date");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("posts");
};
