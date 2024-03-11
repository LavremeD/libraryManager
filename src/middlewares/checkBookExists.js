const knex = require("../database/knex/migrations");

async function checkBookExists(req, res, next){
    const {id} = req.params
    const book = await knex("book").where({id})
    
    if(book.length === 0){
        return res.status(400).json("Tarefa não encontrada")
    }
    next()
}
module.exports = checkBookExists