const knex = require("../database/knex")

class UserController{
  
    async createUser(req, res) {
        const{name, email, fone} = req.body
        
        

        await knex("users").insert({ name, email, fone})

       
        res.status(201).json("usuario cadastrado com sucesso!")
            
    }

    async listUsers(req, res) {
        const users = await knex("users")
        res.status(200).json(users)
    }

    async listUserById(req, res){
        const {user_id} = req.params
        const [user] =  await knex("users").where({id: user_id})
        
        res.status(200).json(user)
    }


    async updateUser(req, res) {
        const {user_id} = req.params
        const {name, email} = req.body

        await knex("users").where({id: user_id}).update({name, email})
        return res.status(200).json("usuario atualizado com sucesso!")
        
    }

    async updateUserStatus(req, res){
        const {user_id} = req.params
        await knex("users").where({id: user_id}).update()
        
        return res.status(200).json("Status alterado com sucesso!")
    }

    async deleteUser(req, res) {
    const {user_id} = req.params
    await knex("users").where({id: user_id}).delete()
    return res.status(200).json("Registro deletado com sucesso!")
    }
}

module.exports = UserController