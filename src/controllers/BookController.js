const knex = require("../database/knex")
class BookController{
  
    async createBook(req, res) {
        const{title, author, category} = req.body
        const book = {
            title,
            author,
            category
        }

        await knex("books").insert({title: book.title, author: book.author, category: book.category})
       
        return res.status(201).json("tarefa criada com sucesso.")
    }

    async listBooks(req, res) {
        const book = await knex("books")
        
        res.status(200).json(book)
    }

    async listBookById(req, res){
        const {id} = req.params
        const [book] = await knex("books").where({id})
        
       return res.status(200).json(book)
    }

    async updateBook(req, res) {
        const {id} = req.params
        const {user_id} = req.params
        await knex("books").where({id}).update({user_id})
        return res.status(200).json("livro emprestado!")
    }
    async updateBookStatus(req, res){
        const {id} = req.params

        await knex("books").where({id}).update({availability: true})
        
        return res.status(200).json("Status alterado com sucesso!")
    }

    async deleteBook(req, res) {
    const {id} = req.params
    await knex("books").where({id}).delete()
    return res.status(200).json("Registro deletado com sucesso!")
    }
}

module.exports = BookController

