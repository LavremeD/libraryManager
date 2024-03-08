const {Router} = require("express")
const BookController = require("../controllers/BookController")
const checkBookExists = require("../middlewares/checkBookExists")
const bookRoutes = Router()
const bookController = new BookController()

bookRoutes.post("/book/:user_id", bookController.createTask)

bookRoutes.get("/book", bookController.listTasks)
bookRoutes.get("/book/:id", checkBookExists,  bookController.listTaskById)

bookRoutes.put("/book/:id", checkBookExists, bookController.updateTask)
bookRoutes.patch("/book/status/:id", checkBookExists, bookController.updateTaskStatus)

bookRoutes.delete("/book/:id", checkBookExists, bookController.deleteTask)


module.exports = bookRoutes