const knex = require("../database/knex/migrations")
class BookController{
  
    async createBook(req, res) {
        const {user_id} = req.params
        const{titulo, autor, categoria} = req.body
        const book = {
            titulo,
            autor,
            categoria,
            disponibilidade: false,
            user_id
        }

        await knex("book").insert({titulo: book.titulo, autor: book.autor, categoria: book.categoria, disponibilidade: book.disponibilidade, user_id: book.user_id })
       
        return res.status(201).json("tarefa criada com sucesso.")
    }

    async listBooks(req, res) {
        const book = await knex("book")
        
        res.status(200).json(book)
    }

    async listBookById(req, res){
        const {id} = req.params
        const book = await knex("book").where({id})
        
        res.status(200).json(book)
    }

    async updateBook(req, res) {
        const {id} = req.params
        const {titulo, autor} = req.body
        await knex("book").where({id}).update({titulo, autor})
        return res.status(200).json("Registro atualizado com sucesso!")
    }
    async updateBookStatus(req, res){
        const {id} = req.params

        await knex("book").where({id}).update({disponibilidade: true})
        
        return res.status(200).json("Status alterado com sucesso!")
    }

    async deleteBook(req, res) {
    const {id} = req.params
    await knex("book").where({id}).delete()
    return res.status(200).json("Registro deletado com sucesso!")
    }
}

module.exports = BookController

