const { register , login, post, postRetrieveAll, mypost, logout } = require("../controllers/authController")
const jwtAuth = require("../middleware/jwtAuth")
const express = require("express")
const authRouter = express.Router()

authRouter.post("/register" , register)
authRouter.post("/login" , login)
authRouter.post("/post", jwtAuth , post)
authRouter.get("/postRetrieveAll", postRetrieveAll)
authRouter.get("/mypost",jwtAuth, mypost)
authRouter.post("/logout",jwtAuth, logout)



module.exports = authRouter