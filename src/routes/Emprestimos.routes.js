const {Router} = require("express")
const EmprestimosController = require("../controllers/EmprestimosController")

const emprestimosRoutes = Router()
const emprestimosController = new EmprestimosController()

emprestimosRoutes.post("/:user_id/:book_id", emprestimosController.BorrowBooks)

emprestimosRoutes.get("/:user_id", emprestimosController.listBorrowedBooks)

emprestimosRoutes.get("/total/:user_id", emprestimosController.totalBorrowedBooks)

emprestimosRoutes.patch("/devolucao/:user_id/:book_id", emprestimosController.returnBorrowBooks)

module.exports = emprestimosRoutes