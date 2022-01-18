const Router = require('express').Router;
const router = new Router()
const userController = require("../controllers/users-controller")

router.post('/registration',userController.registration)
router.post('/login',userController.login)
router.post('/logout',userController.logout)
router.get('/activate/:link',userController.activate)
router.post('/refresh',userController.refresh)
router.post('/users',userController.getUsres)
console.log("router",router);
module.exports = router
