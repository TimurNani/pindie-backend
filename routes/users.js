const usersRouter = require('express').Router();

const {
createUser,
findAllUsers,
updateUser,
deleteUser,
checkIsUserExists,
findUserById,
checkEmptyNameAndEmailAndPassword
} = require('../middlewares/users');

const {
sendUserById,
sendUserUpdated,
sendUserCreated,
sendUserDeleted,
sendAllUsers
} = require('../controllers/users');


// Обрабатываем GET-запрос с роутом '/users'
usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.post('/users', findAllUsers, checkIsUserExists, checkEmptyNameAndEmailAndPassword, createUser, sendUserCreated);
usersRouter.put('/users:id', checkEmptyNameAndEmailAndPassword, updateUser, sendUserUpdated);
usersRouter.delete('/users:id', deleteUser, sendUserDeleted);
usersRouter.get("/users:id", findUserById, sendUserById);

// Экспортируем роут для использования в приложении — app.js
module.exports = usersRouter;