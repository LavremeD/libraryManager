const {Router} = require("express")
const BookController = require("../controllers/BookController")
const checkBookExists = require("../middlewares/checkBookExists")
const bookRoutes = Router()
const bookController = new BookController()

bookRoutes.post("/", bookController.createBook)

bookRoutes.get("/", bookController.listBooks)
bookRoutes.get("/:id", bookController.listBookById)

bookRoutes.put("/id", bookController.updateBook)
bookRoutes.patch("/status/:id", checkBookExists, bookController.updateBookStatus)

bookRoutes.delete("/books/:id", checkBookExists, bookController.deleteBook)


module.exports = bookRoutes