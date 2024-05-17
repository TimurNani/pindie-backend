const usersRouter = require('express').Router();
const createUser = require('../middlewares/users');
const sendUserCreated = require('../controllers/users');
const findAllusers = require('../middlewares/users');
const updateUser = require('../middlewares/users');
const sendUserUpdated = require('../controllers/users');
const deleteUser = require('../middlewares/users');
const sendUserDeleted = require('../controllers/users');
const checkIsUserExists = require('../middlewares/users');
const checkEmptyNameAndEmailAndPassword = require('../middlewares/users');

// Обрабатываем GET-запрос с роутом '/users'
usersRouter.post('/users', findAllusers, checkIsUserExists, checkEmptyNameAndEmailAndPassword, createUser, sendUserCreated);
usersRouter.put('/users:id', checkEmptyNameAndEmailAndPassword, updateUser, sendUserUpdated);
usersRouter.delete('/users:id', deleteUser, sendUserDeleted);

// Экспортируем роут для использования в приложении — app.js
module.exports = usersRouter;