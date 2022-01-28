const express = require('express');
const UserController = require('../controllers/users-controller');

const router = express.Router();

router.post('/registration', UserController.registration);
router.post('/login', UserController.login);
router.post('/logout', UserController.logout);
router.get('/activate/:link', UserController.activate);
router.post('/refresh', UserController.refresh);
router.get('/users', UserController.getUsres);
// console.log("router", router);
module.exports = router;
