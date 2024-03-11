const {Router} = require("express")
const BookController = require("../controllers/BookController")
const checkBookExists = require("../middlewares/checkBookExists")
const bookRoutes = Router()
const bookController = new BookController()

bookRoutes.post("/book/:user_id", bookController.createBook)

bookRoutes.get("/book", bookController.listBooks)
bookRoutes.get("/book/:id", checkBookExists,  bookController.listBookById)

bookRoutes.put("/book/:id", checkBookExists, bookController.updateBook)
bookRoutes.patch("/book/status/:id", checkBookExists, bookController.updateBookStatus)

bookRoutes.delete("/book/:id", checkBookExists, bookController.deleteBook)


module.exports = bookRoutes