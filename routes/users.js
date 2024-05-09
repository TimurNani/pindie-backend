const usersRouter = require('express').Router();
  
// Импортируем вспомогательные функции
const findAllusers = require('../middlewares/users');
const sendAllusers = require('../controllers/users');

// Обрабатываем GET-запрос с роутом '/users'
usersRouter.get('/users', findAllusers, sendAllusers);

// Экспортируем роут для использования в приложении — app.js
module.exports = usersRouter;