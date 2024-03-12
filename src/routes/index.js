const {Router} = require("express")
const bookRoutes = require("./book.routes")
const userRoutes = require("./users.routes")
const emprestimosRoutes = require("./Emprestimos.routes")
const routes = Router()

routes.use("/books", bookRoutes)
routes.use("/users", userRoutes)
routes.use("/emprestimos", emprestimosRoutes)

module.exports = routes