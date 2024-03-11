exports.up = (knex) => {
    return knex.schema.createTable("books", (table) => { 
        table.increments('id').primary();
        table.string("title").notNullable();
        table.string("author").notNullable();
        table.string("category").notNullable();
        table.boolean("availability").defaultTo("true");
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
        table.boolean("user_id").defaultTo("false")
    })
};
exports.down = (knex) => {
    return knex.schema.dropTableIfExists("books")
  
};