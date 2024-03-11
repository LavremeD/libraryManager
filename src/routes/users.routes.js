const {Router} = require("express");
const UserController = require("../controllers/UserController")
const checkUserExist = require("../middlewares/checkUserExist")
const userRoutes = Router()
const userController = new UserController()

userRoutes.post("/users", userController.createUser)

userRoutes.get("/users", userController.listUsers)
userRoutes.get("/users/:user_id", checkUserExist, userController.listUserById)

userRoutes.put("/users/:user_id", checkUserExist, userController.updateUser)
userRoutes.patch("/users/status/:user_id", checkUserExist, userController.updateUserStatus)

userRoutes.delete("/users/:user_id",checkUserExist, userController.deleteUser)

module.exports = userRoutes