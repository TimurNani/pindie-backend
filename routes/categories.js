const findAllCategories = require('../middlewares/categories');
const createCategory = require('../middlewares/categories');
const updateCategory = require('../middlewares/categories');
const sendCategoryUpdated = require('../controllers/categories');
const sendCategoryCreated = require('../controllers/categories');
const deleteCategory = require('../middlewares/categories');
const sendCategoryDeleted = require('../controllers/categories');
const checkIsCategoryExists = require('../middlewares/categories');
const { checkEmptyName } = require('../middlewares/games');

// Обрабатываем GET-запрос с роутом '/categories'
categoriesRouter.post('/categories', findAllCategories, checkIsCategoryExists, checkEmptyName, createCategory, sendCategoryCreated);
categoriesRouter.put('/categories:id', checkEmptyName, updateCategory, sendCategoryUpdated);
categoriesRouter.delete('/categories:id', deleteCategory, sendCategoryDeleted);

// Экспортируем роут для использования в приложении — app.js
module.exports = categoriesRouter;