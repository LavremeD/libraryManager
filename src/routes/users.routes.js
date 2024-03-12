const {Router} = require("express");
const UserController = require("../controllers/UserController")
const checkUserExist = require("../middlewares/checkUserExist")
const userRoutes = Router()
const userController = new UserController()

userRoutes.post("/", userController.createUser)

userRoutes.get("/", userController.listUsers)
userRoutes.get("/:user_id", checkUserExist, userController.listUserById)

userRoutes.put("/:user_id", checkUserExist, userController.updateUser)
userRoutes.patch("/status/:user_id", checkUserExist, userController.updateUserStatus)

userRoutes.delete("/:user_id",checkUserExist, userController.deleteUser)

module.exports = userRoutes