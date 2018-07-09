exports.up = function(knex, Promise) {
  return knex.schema.createTable("info", table => {
    table.increments("id").primary();
    table.string("title");
    table.text("text1");
    table.text("text2");
    table.text("text3");
    table.text("text4");
    table.text("text5");
    table.text("image1");
    table.text("image2");
    table.text("image3");
    table.text("image4");
    table.text("image5");
    table.string("contributor");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("info");
};
