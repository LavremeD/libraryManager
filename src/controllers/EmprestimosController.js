const knex = require("../database/knex")
class EmprestimosController{
    async BorrowBooks(req, res){
        const{user_id, book_id} = req.params
        const book = await knex("books").where({id: book_id}).first()
        const user = await knex("users").where({id: user_id}).first()
        if(!book){
            return res.status(400).json("Livro não encontrado!")
        }
        if(!user){
            return res.status(400).json("Usuário não encontrado! ")
        }
        await knex("emprestimos").insert({user_id, book_id})
        await knex("books").where({id: book_id}).update({availability: false})

        return res.status(200).json("Emprestimo realizado com sucesso!")

    }
async listBorrowedBooks(req, res){
    const {user_id} = req.params

    const emprestimos = await knex("emprestimos").where({user_id}).innerJoin('books', 'books.id', 'emprestimos.book_id').select('books.title', 'books.author', 'books.pages')

    return res.status(200).json(emprestimos)
    
}
async totalBorrowedBooks(req, res){
    const{user_id} = req.params

     const [total] = await knex('emprestimos').where({user_id}).count({books: 'book_id'})
     return res.status(200).json(total)

}
async returnBorrowBooks(req, res){
    const{user_id, book_id} = req.params
    const book = await knex("books").where({id: book_id}).first()
    const user = await knex("users").where({id: user_id}).first()
    if(!book){
        return res.status(400).json("Livro não encontrado!")
    }
    if(!user){
        return res.status(400).json("Usuário não encontrado! ")
    }

    const [emprestimos] = await knex("emprestimos").where({user_id})
    const bookId = emprestimos.book_id

    if(bookId == book_id){
        await knex("books").where({id: book_id}).update({availability: false})

        return res.status(200).json("Livro devolvido com sucesso! ")
    }
    return res.status(400).json("Operação não realizada! ")
}
}
module.exports = EmprestimosController